// Your code here
const dodger = document.getElementById('dodger');


function movedodgerleft(){
    console.log(dodger.style.left);
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
}

function movedodgerright(){
    const rightnumbers = dodger.style.right.replace("px", "");
    const right = parseInt(leftNumbers, 10);

    if (right < 400) {
        dodger.style.left = `${right + 10}px`;
      }
}

function movedodgerup(){
    const upNumber = dodger.style.right.replace("px", "");
    const up = parseInt(upNumbers, 10);

    if (up >= 0){
        dodger.style.bottom = `$(up + 10)px`
}

document.addEventListener('keydown', (e) => {
    
    if(e.key === 'ArrowRight'){
        movedodgerright();
    }else if (e.key === 'ArrowLeft'){
        movedodgerleft();
    }else if (e.key === 'ArrowUp'){
        movedodgerup();
    }

})