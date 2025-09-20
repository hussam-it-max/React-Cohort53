export default function Button({setCount,change,text}){
    function handelClick(){

        setCount(prevCount => {
          if(change===-1&&prevCount===0||change===-2 &&  prevCount + change < 0){
            return prevCount ;
          }
          return prevCount + change;
        });

    }

    return (
        <div>
            <button onClick={handelClick}>{text}</button>
        </div>
    )
     
}