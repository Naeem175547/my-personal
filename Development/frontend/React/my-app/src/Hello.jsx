function getName(){
    console.log("runned");
   return "Imrankhan";

}
function Hello(){
    const name="imran khna";
    const style={
        color:"yellow",
        fontSize:"20px"
    }
    return <>
        <p style={style}>From {name} {getName()}hello</p>
    </>

}
export default Hello;