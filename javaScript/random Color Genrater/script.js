// let boxes = document.querySelector(".container").children

// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
//     // e.textContent = e.style.color;
// })

// // let boxes = document.querySelectorAll(".box");
// // function changeBgColor() {
// //   let ran = Math.ceil(Math.random() * 600000);
// //   return (ranplus = "#" + ran);
// // }
// // changeBgColor();
// // boxes.forEach((e) => {
// //   e.style.backgroundColor = changeBgColor();
// //   e.style.color = changeBgColor();
// // });


let boxes = document.querySelector(".container").children

function changeBgColor(){
    let val1 = Math.ceil(0+ Math.random()*255)
    let val2 = Math.ceil(0+ Math.random()*255)
    let val3 = Math.ceil(0+ Math.random()*255)
    return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach(e=>{
     e.style.backgroundColor = changeBgColor()
     e.style.color = changeBgColor()
})

