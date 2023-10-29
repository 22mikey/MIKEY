const getColor = () =>{
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomCode="#"+randomNumber.toString(16);
    document.body.style.background=randomCode;
    document.getElementById("color-code").innerText=randomCode;
    console.log(randomNumber);

}
document.getElementById("btn").addEventListener("click"/*"keyup"*/,getColor)

 // Math function --> generate no. to 0.99
// let a = math.random();
// document.write(a)