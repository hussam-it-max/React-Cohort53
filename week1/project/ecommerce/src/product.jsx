export default function Product({image,title}){
    return(
        <div className="product">
            <img src={image} alt={title} />
            <h3>{title}</h3>

        </div>
    )
}