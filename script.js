var btn = document.getElementById("btn1");
btn.addEventListener("click", alarm);
document.getElementById('btn2').addEventListener("click",alarm2);

function alarm (){
  console.log("Button was pressed");
  this.style.backgroundColor = "red";
  document.querySelector('.box1').style.backgroundColor="yellow";
};
console.log(btn);
function alarm2 (){
    console.log("Button2 was pressed");
    this.style.backgroundColor = "red";
    btn.style.background = "yellow";
    document.querySelector('.box1').style.backgroundColor = "rgb(247, 118, 118)";
  };