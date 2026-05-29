import React, {useState} from 'react';

function MyComponents(){

    const [name, setName] = useState("Guest");
    const [quality, setQuality] = useState(1);
    const [comments, setComments] = useState("leave the ");
    const [payment, setPayement] = useState();
    const [shipping, setShipping]= useState();

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQualityChange(event){
        setQuality(event.target.value);
    }

    function handleCommentsChange(event){
        setComments(event.target.value);
    }
    
    function handlePaymentChange(event){
        setPayement(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return(<div>
                <input value ={name} onChange={handleNameChange}/>
                <p>Name: {name}</p>

                <input value ={quality} onChange={handleQualityChange} type="number"/>
                <p>Quality: {quality}</p>

                <input value ={comments} onChange={handleCommentsChange}
                placeholder='Enter delivary instructions'/>
                <p>Comments: {comments}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="GiftCard">GiftCard</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input type="radio" value="Pick Up"
                           ckecked={shipping === "Pick Up"}
                           onChange={handleShippingChange}/>
                    Pick Up
                </label><br/>
                <label>
                    <input type="radio" value="Delivery"
                           ckecked={shipping === "Delivery"}
                           onChange={handleShippingChange}/>
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>);

}
export default MyComponents