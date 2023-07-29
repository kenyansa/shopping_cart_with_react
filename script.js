let addToCartButtons = document.getElementById("btn-primary");
let cartContainer = document.getElementsByTagName("tbody")[0];
let quantityFields = document.getElementsByClassName("num");
let delete_buttons = document.getElementsByClassName("uk-button-danger");

//get all the add-to-cart buttons
for(let i=0;
    i<addToCartButtons.clientHeight;
    i++
    ){
        addToCartButtons[i].addEventListener('click', addToCart)
}