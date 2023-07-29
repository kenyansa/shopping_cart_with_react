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
//function for adding items to our cart
function addToCart(e){
    let itemContainer = document.createElement("tr");
    let btn = e.target;
    let btnGrandParent = btn.parentElement.parentElement;
    let btnParent = btn.parentElement;
    let itemImage = btnGrandParent.children[0].src;
    let itemName = btnParent.children[0].innerText;
    let itemPrice = btnParent.children[1].innerText;

    itemContainer.innerHTML = `
    <td><input class="uk-checkbox" type="checkbox"></td>
    <td><img class="uk-preserve-width uk-border-circle" src=${itemImage} width="40" alt=""></td>
    <td class="uk-table-link">
        <h3 class = "item-name">${itemName}</h3>
    </td>
    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
    <td><input type = 'number' class = 'num' value = '1'></td>
    <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
    <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>
    `
    cartContainer.append(itemContainer);
}
//to access individual quantity fields
for(let i=0;
    i<quantityFields.length;
    i++
    ){
        quantityFields[i].value = 1
        quantityFields[i].addEventListener('change', totalCost)
}

for(let i=0;
    i<delete_buttons.length;
    i++
    ){
        delete_buttons[i].addEventListener('click', removeItem)

        //grandTotal()
}

//multiplying the quantity and the price
function totalCost(e){
    let quantity = e.target;
    quantity_parent = quantity.parentElement.parentElement;
    price_field = quantity_parent.getElementById('item-price')[0];
    total_field = quantity_parent.getElementsByClassName('total-price')[0];
    price_field.children[0].innerText = '$' + quantity.value*price_field_content

    grandTotal()

    if(isNaN(quantity.value) || quantity.value<= 0){
        quantity.value = 1;
    }
}