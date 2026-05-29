import React,{useState, useEffect} from "react";

function UseEffect(){

    const [count, setcount] = useState(0);
    const [color, setcolor] =useState("green");

    useEffect(() => {
        document.title = `Count: ${count}`;
    },[count, color]);

    function addCount(){
        setcount(c => c + 1);
    }
    
    function substractCount(){
        setcount(c => c - 1);
    }

    function changeColor(){
        setcolor(c => c === "green" ? "red" : "green");
    }



    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={substractCount}>Substract</button><br/>
        <button onClick={changeColor}>color</button>
    </>)

}
export default UseEffect;