// const innerBox = document.getElementById("inner-box");

// let y = 0;
// let x = 0;

// function moveBox(e) {
//     switch (e.key) {
//         case 'ArrowUp':
//             y -= 8;
//             break;

//         case 'ArrowDown':
//             y += 8;
//             break;

//         case 'ArrowLeft':
//             x -= 8;
//             break;

//         case 'ArrowRight':
//             x += 8;
//             break;
//     }
//     innerBox.style.transform = `translate(${x}px, ${y}px)`;
// }
// document.addEventListener("keydown", moveBox);

const innerBox = document.getElementById("inner-box");
let x=0;
let y=0;

function moveBox(event) {
    if (event.key === 'ArrowUp' && y > -193) {
        y -= 8;
    } else if (event.key === 'ArrowDown' && y < 161) {
        y += 8;
    } else if (event.key === 'ArrowLeft' && x > -193) {
        x -= 8;
    } else if (event.key === 'ArrowRight' && x < 161) {
        x += 8;
    }
    innerBox.style.transform = `translate(${x}px, ${y}px)`;
}

document.addEventListener('keydown', moveBox);
