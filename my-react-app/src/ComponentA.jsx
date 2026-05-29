import React,{usestate} from 'react';

import ComponentB from "./ComponentB.jsx";

function ComponentA(){

    const [user, setUser] = useState("aditya");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <ComponentB />
        </div>
    );
}
export default ComponentA