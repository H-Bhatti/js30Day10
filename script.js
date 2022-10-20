const checkbox = document.querySelectorAll(".inbox input[type='checkbox']")

// console.log(checkbox)

checkbox.forEach(element => element.addEventListener("click", handleCheck));

let lsatChecked ;

function handleCheck (e){
    //checking if shift key is pressed and f it is checked

    let inBetween = false;
    //usually this.checked is false but this conditon makes sure that it was unchecked before and now is checked to move further 
    if (e.shiftKey && this.checked){
        checkbox.forEach(element => {
            // console.log("apples")
            if (element === this || element === lsatChecked)
            {
                inBetween = !inBetween;
                console.log("staret of cehcking")
                console.log(this)
            }
            if (inBetween){
                element.checked=true;
            }
        })
    }


    lsatChecked = this;
  
}