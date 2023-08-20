var totalPriceField=document.getElementById('totalPrice');
var finalPriceField=document.getElementById('finalPrice');
var discountPriceField=document.getElementById('discountPrice');
var selectedProducts = document.getElementById('selectedProducts');
var couponField=document.getElementById('coupon');
var CouponButton=document.getElementById('applyButton');
CouponButton.disabled=true;
var MakePurchaseButton=document.getElementById('purchase');
MakePurchaseButton.disabled=true;
var count=0;

function handleCardOneClick(){
    handleCardClick('cardOneName','cardOnePrice')
}
function handleCardTwoClick(){
    handleCardClick('cardTwoName','cardTwoPrice')
}
function handleCardThreeClick(){
    handleCardClick('cardThreeName','cardThreePrice')
}

function handleCardFourClick(){
    handleCardClick('cardFourName','cardFourPrice')
}
function handleCardFiveClick(){
    handleCardClick('cardFiveName','cardFivePrice')
}
function handleCardSixClick(){
    handleCardClick('cardSixName','cardSixPrice')
}

function handleCardClick(prodName,prodPrice){
    count=count+1;
    var itemNameElement = document.getElementById(prodName);
    var itemName=itemNameElement.innerText;
    console.log(itemName);

    
    var newListItem=document.createElement('li');
    var text =document.createTextNode(`${count}. ${itemName}`)
    newListItem.appendChild(text);
    selectedProducts.appendChild(newListItem);


    var itemPriceString = document.getElementById(prodPrice).innerText;
    var itemPrice =parseFloat(itemPriceString);

    var totalPrice=parseFloat(totalPriceField.innerText)
    var calTotalPrice=(totalPrice+itemPrice).toFixed(2);
    totalPriceField.innerText=`${calTotalPrice}`;
    if(calTotalPrice>=200){
        CouponButton.disabled=false;
        CouponButton.classList.replace('bg-pink-300','bg-pink-500')
    }
    if(calTotalPrice>0){
        MakePurchaseButton.disabled=false;
        MakePurchaseButton.classList.replace('bg-pink-300','bg-pink-500');
    }
    
    
    finalPriceField.innerText=`${calTotalPrice}`;
    console.log(calTotalPrice);

}

function handleCoupon(){
    var totalPrice=parseFloat(totalPriceField.innerText);
    var coupon=couponField.value;
    
    if(totalPrice>=200 && coupon=='SELL20'){
        var discount = ((totalPrice*20)/100).toFixed(2);
        discountPriceField.innerText=`${discount}`;
        finalPriceField.innerText=`${(totalPrice-discount).toFixed(2)}`;
        CouponButton.disabled=true;
    }
}

function clearAll(){
    totalPriceField.innerText='00';
    discountPriceField.innerText='00';
    finalPriceField.innerText='00';
    couponField.value=null;
    selectedProducts.innerHTML=null;
    CouponButton.disabled=true;
    CouponButton.classList.replace('bg-pink-500','bg-pink-300')
    MakePurchaseButton.disabled=true;
    MakePurchaseButton.classList.replace('bg-pink-500','bg-pink-300');
    count=0;
}