function Buttons(){

    const handleclick = () => console.log("Ouchh");

    const handleclick2 =(name) => console.log(`${name} stop clicking me`);
    return (<button onClick={ () => handleclick2("aditya")}>click me</button>)

}
export default Buttons