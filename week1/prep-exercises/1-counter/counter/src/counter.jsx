import {useState} from 'react';
import Button from './button';
import Count from './count';
export default function Counter(){
    const [count,setCount]=useState(0);
    const feedback=count>10? "It's higher than 10!" :"Keep counting...";
    

    return (
        <div>
            <Count count={count} />
            <Button setCount={setCount} change={+1} text="Add 1"/>
            <Button setCount={setCount} change={-1} text="Minus 1"/>
            <Button setCount={setCount} change={+2} text="Add 2"/>
            <Button setCount={setCount} change={-2} text="Minus 2"/>
            <p>{feedback}</p>
        </div>
    )

}