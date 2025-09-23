// saveProducts.js
import fs from "fs";

async function fetchAndSave() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  // Write as a JS file
  fs.writeFileSync(
    "./allProducts.js",
    `export const allProducts = ${JSON.stringify(data, null, 2)};`
  );
}

fetchAndSave();
