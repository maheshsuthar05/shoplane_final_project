var mainContainer = $("#main-container");

//Top Bar
var topBar = $("<header>").addClass("topbar");
mainContainer.append(topBar);

//Hamburger menu
var hamMenu = $("<div>").addClass("hamburger-menu");
topBar.append(hamMenu);
var hamIcon = $("<i>").attr("class","fas fa-bars");
hamMenu.append(hamIcon);

//Floating Top Menu
var floatMenu = $("<nav>").addClass("float-menu");
mainContainer.append(floatMenu);

var floatMenuContainer = $("<div>").addClass("float-menu-container");
floatMenu.append(floatMenuContainer);

var floatbarMenuClothing = $("<a>").addClass("floatbar-menu-item");
floatbarMenuClothing.attr("href","#clothing-grid");
floatMenuContainer.append(floatbarMenuClothing);
floatbarMenuClothing.text("clothing");
floatbarMenuClothing.click(function(){
    floatMenu.animate({left:"-550px"}, 500)
})

var floatbarMenuAccessories = $("<a>").addClass("floatbar-menu-item");
floatbarMenuAccessories.attr("href","#accessories-grid");
floatMenuContainer.append(floatbarMenuAccessories);
floatbarMenuAccessories.text("accessories");
floatbarMenuAccessories.click(function(){
    floatMenu.animate({left:"-550px"}, 500)
})

var floatbarSearch = $("<div>").addClass("floatbar-search");
floatMenuContainer.append(floatbarSearch);

floatbarSearch.append($("<i>").attr("class","fas fa-search"));

var floatsearchText = $("<input>").attr({
    "type":"text",
    "name":"search",
    "placeholder":"Search for Clothing and Accessories"
});
floatbarSearch.append(floatsearchText);

hamMenu.click(function(){
    if(floatMenu.css("left") === "-440px"){
        floatMenu.animate({left:"-10px"}, 500)
    }
    else{
        floatMenu.animate({left:"-440px"}, 500)
    }
})

//Top Bar Menu
var topbarMenu = $("<div>").addClass("topbar-menu");
topBar.append(topbarMenu);

var brandLogo = $("<a>").addClass("brand-logo");
brandLogo.attr("href","index.html");
topbarMenu.append(brandLogo);
brandLogo.html("<span>SHOP</span>LANE");

var topbarMenuClothing = $("<a>").addClass("topbar-menu-item");
topbarMenuClothing.attr("href","#clothing-grid");
topbarMenu.append(topbarMenuClothing);
topbarMenuClothing.text("clothing");

var topbarMenuAccessories = $("<a>").addClass("topbar-menu-item");
topbarMenuAccessories.attr("href","#accessories-grid");
topbarMenu.append(topbarMenuAccessories);
topbarMenuAccessories.text("accessories");

//Top bar search
var topbarSearch = $("<div>").addClass("topbar-search");
topBar.append(topbarSearch);

topbarSearch.append($("<i>").attr("class","fas fa-search"));

var searchText = $("<input>").attr({
    "type":"text",
    "name":"search",
    "placeholder":"Search for Clothing and Accessories"
});
topbarSearch.append(searchText);

//Top bar cart and profile icon
var topbarProfile = $("<div>").addClass("topbar-profile");
topBar.append(topbarProfile);

var cartWrapper = $("<div>").addClass("cart-wrapper");
topbarProfile.append(cartWrapper);
var cartCounter = $("<p>").addClass("cart-counter").text("0");
cartWrapper.append(cartCounter);
var cartIcon = $("<a>").attr("href","checkout.html");
cartWrapper.append(cartIcon);
cartIcon.append($("<i>").attr("class","fas fa-shopping-cart"));

var topbarSocial = $("<img>").addClass("topbar-social");
topbarSocial.attr("src","https://test-hosting-8f9bf.web.app/assets/avatar.jpg");
topbarProfile.append(topbarSocial);

var productListData = window.localStorage.getItem("product-list") === null || window.localStorage.getItem("product-list") === '' ? [] : JSON.parse(window.localStorage.getItem("product-list"));
var atcCount = 0, finalAmount = 0;
for(var i=0; i<productListData.length; i++){
    atcCount = atcCount + productListData[i].count;
    finalAmount = finalAmount + (productListData[i].count*productListData[i].price);
}
cartCounter.text(atcCount);

/////// ----------------- Checkout Page ----------------- ///////////

var checkoutContainer = $("<div>").addClass("checkout-container");
mainContainer.append(checkoutContainer);

var checkoutHeading = $("<h3>").addClass("checkout-heading").text("Checkout");
checkoutContainer.append(checkoutHeading);

var totalItems = $("<p>").addClass("total-items").text("Total Items: "+productListData.length);
checkoutContainer.append(totalItems);

var checkoutWrapper = $("<section>").addClass("checkout-wrapper");
checkoutContainer.append(checkoutWrapper);

var cartItemWrapper = $("<div>").addClass("cart-item-wrapper");
checkoutWrapper.append(cartItemWrapper);

var finalPriceWrapper = $("<div>").addClass("final-price-wrapper");
checkoutWrapper.append(finalPriceWrapper);

for(var i=0; i<productListData.length; i++){
    renderCartItem(productListData[i]);
}

//// Final amount display
finalPriceWrapper.append($("<h3>").addClass("total-amount-title").text("Total Amount"));
finalPriceWrapper.append($("<p>").addClass("final-amount-title").text("Amount: Rs "));
$(".final-amount-title").append($("<span>").addClass("final-amount-price").text(currencyFormat(finalAmount)));
finalPriceWrapper.append($("<button>").addClass("place-order").text("Place Order"));

//Order confirmation page navigation
$(".place-order").click(function(){
    if(cartCounter.text() === '0'){
        alert("Please add products to cart");
    }
    else{
        var orderItemArr = [];
        for(var i=0; i<productListData.length; i++) {
            var productDetailsObj = {
                "id": productListData[i].id,
                "brand": productListData[i].brand,
                "name": productListData[i].name,
                "price": productListData[i].price,
                "count": productListData[i].count,
                "preview": productListData[i].preview,
                "isAccessory": productListData[i].isAccessory
            }

            orderItemArr.push(productDetailsObj);
        }

        var finalObj = {
            amount: finalAmount,
            products: orderItemArr
        }

        var dataJSON = JSON.stringify(finalObj);

        try{
            $.ajax({
                type: "POST",
                url: "https://60864088d14a870017578f00.mockapi.io/CreatedOrder",
                data: dataJSON,
                success: function(){
                    location.assign("confirmation.html");
                    window.localStorage.setItem("product-list",[]);
                },
            })
        }catch(e){
            console.log(e);
        }
    }   
})


function renderCartItem(productData){
    var cartProductCard = $("<div>").addClass("cart-product-card");
    cartItemWrapper.append(cartProductCard);

    var cardDetails = $("<div>").addClass("card-details");
    cartProductCard.append(cardDetails);

    cardDetails.append($("<img>").attr("src",productData.preview).addClass("cart-card-thumbnail"));

    var cartCardDetails = $("<div>").addClass("cart-card-details");
    cardDetails.append(cartCardDetails);

    cartCardDetails.append($("<h3>").addClass("cart-card-name").text(productData.name));
    cartCardDetails.append($("<p>").addClass("cart-card-count").text("Quantity - "+productData.count));
    
    var totalAmount = productData.count*productData.price;
    cartCardDetails.append($("<p>").addClass("cart-card-amount").text("Total Amount: Rs "+currencyFormat(totalAmount)));

    var deleteIcon = $("<i>").attr("class","fas fa-trash");
    cartProductCard.append(deleteIcon);

    deleteIcon.click(function(){
        cartCounter.text(cartCounter.text() - productData.count);
        var cartLocalData = window.localStorage.getItem("product-list") === null || window.localStorage.getItem("product-list") === '' ? [] : JSON.parse(window.localStorage.getItem("product-list"));
        var pos = -1;
        for(var i=0; i<cartLocalData.length; i++){
            if(cartLocalData[i].id === productData.id){
                pos = i;
            }
        }
        cartLocalData.splice(pos,1);
        window.localStorage.setItem("product-list",JSON.stringify(cartLocalData));
        cartProductCard.remove();
        totalItems.text("Total Items: "+cartLocalData.length);
        finalAmount = finalAmount - totalAmount;
        $(".final-amount-price").text(currencyFormat(finalAmount));
    })
}

function currencyFormat(x){
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
}

var footer = $("<footer>");
  mainContainer.append(footer);

  var onlineStore = $("<section>").addClass("footer-menu");
  footer.append(onlineStore);
  var helpfulLinks = $("<section>").addClass("footer-menu");
  footer.append(helpfulLinks);
  var partners = $("<section>").addClass("footer-menu");
  footer.append(partners);
  var address = $("<section>").addClass("footer-menu");
  footer.append(address);

  onlineStore.append($("<p>").addClass("footer-menu-heading").text("online store"));
  onlineStore.append($("<a>").attr({"href":"index.html","class":"footer-menu-item"}).text("men clothing"));
  onlineStore.append($("<a>").attr({"href":"index.html","class":"footer-menu-item"}).text("women clothing"));
  onlineStore.append($("<a>").attr({"href":"index.html","class":"footer-menu-item"}).text("men accessories"));
  onlineStore.append($("<a>").attr({"href":"index.html","class":"footer-menu-item"}).text("women accessories"));

  helpfulLinks.append($("<p>").addClass("footer-menu-heading").text("helpful links"));
  helpfulLinks.append($("<a>").attr({"href":"index.html","class":"footer-menu-item"}).text("home"));
  helpfulLinks.append($("<a>").attr({"href":"index.html","class":"footer-menu-item"}).text("about"));
  helpfulLinks.append($("<a>").attr({"href":"index.html","class":"footer-menu-item"}).text("contact"));

  partners.append($("<p>").addClass("footer-menu-heading").text("partners"));
  partners.append($("<a>").attr({"href":"index.html","class":"footer-menu-item"}).text("zara"));
  partners.append($("<a>").attr({"href":"index.html","class":"footer-menu-item"}).text("pantaloons"));
  partners.append($("<a>").attr({"href":"index.html","class":"footer-menu-item"}).text("levis"));
  partners.append($("<a>").attr({"href":"index.html","class":"footer-menu-item"}).text("ucb"));
  partners.append($("<a>").attr({"href":"index.html","class":"footer-menu-item"}).text("+ many more"));

  address.append($("<p>").addClass("footer-menu-heading").text("address"));
  address.append($("<p>").addClass("footer-menu-item").text("building 101"));
  address.append($("<p>").addClass("footer-menu-item").text("central avenue"));
  address.append($("<p>").addClass("footer-menu-item").text("la - 902722"));
  address.append($("<p>").addClass("footer-menu-item").text("united states"));