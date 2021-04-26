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
topbarMenuClothing.attr("href","index.html#clothing-grid");
topbarMenu.append(topbarMenuClothing);
topbarMenuClothing.text("clothing");

var topbarMenuAccessories = $("<a>").addClass("topbar-menu-item");
topbarMenuAccessories.attr("href","index.html#accessories-grid");
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

//////////////////////////////////////////////Product Page

var productId = window.location.search.split('=')[1];
$.ajax({
  type: "GET",
  url:"https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+productId,
  success: function(response){
var productData = response;
var mainProductContainer = $("<div>").attr("id","main-product-container");
mainContainer.append(mainProductContainer);

var productThumbnail = $("<div>").attr("id","product-thumbnail");
mainProductContainer.append(productThumbnail);

var productMainImage = $("<img>").attr({
    "class":"product-main-image",
    "src":productData.photos[0],
    "alt":"Product image"
});
productThumbnail.append(productMainImage);

var productDetails = $("<div>").attr("id","product-details");
mainProductContainer.append(productDetails);

var productTitle = $("<h1>").addClass("product-title").text(productData.name);
productDetails.append(productTitle);

var productBrand = $("<p>").addClass("brand").text(productData.brand);
productDetails.append(productBrand);

var priceDetails = $("<div>").addClass("price-details");
productDetails.append(priceDetails);

var productPrice = $("<span>").addClass("price").text("Price: Rs ");
priceDetails.append(productPrice);

var productPriceFigure = $("<span>").addClass("price-figure").text(productData.price);
priceDetails.append(productPriceFigure);

var productDescriptionTitle = $("<h3>").addClass("description-title").text("Description");
productDetails.append(productDescriptionTitle);

var productDescription = $("<p>").addClass("description").text(productData.description);
productDetails.append(productDescription);

var productPreviewTitle = $("<h3>").addClass("product-preview-title").text("Product Preview");
productDetails.append(productPreviewTitle);

var productPreview = $("<div>").addClass("product-preview");
productDetails.append(productPreview);

function renderPreviewImage(url,pos){
  var image = $("<img>").attr("src",url).addClass("product-preview-image");
  if(pos === 0){
    image.addClass("active");
  }
  image.click(function(){
    $(".product-preview-image").removeClass("active");
    image.addClass("active");
    productMainImage.attr("src",url);
  })
  productPreview.append(image);
}

for(var i=0; i<productData.photos.length; i++){
  renderPreviewImage(productData.photos[i],i);
}

var atcButton = $("<button>").addClass("atc-button").text("Add to Cart");
productDetails.append(atcButton);

//////update previous add to cart count
var productListData = window.localStorage.getItem("product-list") === null || window.localStorage.getItem("product-list") === '' ? [] : JSON.parse(window.localStorage.getItem("product-list"));
var atcCount = 0;
  for(var i=0; i<productListData.length; i++){
    atcCount = atcCount + productListData[i].count;
  }
cartCounter.text(atcCount);

atcButton.click(function(){
  atcButton.addClass("atc-btn-animate");
  setTimeout(function(){atcButton.removeClass("atc-btn-animate")},200);

  /////////////////// store object to local storage and increase atc count
   
  var pos = -1;
  for(var i=0; i<productListData.length; i++){
    if(productListData[i].id === productData.id){
      pos = i;
    }
  }
  if(pos === -1){
    productData.count = 1;
    productListData.push(productData);
    window.localStorage.setItem('product-list',JSON.stringify(productListData));
  }
  else{
    productListData[pos].count= productListData[pos].count + 1;
    window.localStorage.setItem('product-list',JSON.stringify(productListData));
  }

  var atcCount = 0;
  for(var i=0; i<productListData.length; i++){
    atcCount = atcCount + productListData[i].count;
  }
  cartCounter.text(atcCount);
})


/////////////////////// Footer Section
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

  }
})  

