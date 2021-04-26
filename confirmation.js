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

var confirmationContainer = $("<div>").addClass("confirmation-container");
mainContainer.append(confirmationContainer);

var tickContainer = $("<div>").addClass("tick-container");
confirmationContainer.append(tickContainer);

var tickMark = $("<img>").attr("src","https://test-hosting-8f9bf.web.app/assets/white-tick.png").addClass("tick-mark");
tickContainer.append(tickMark);

confirmationContainer.append($("<h1>").addClass("confirmation-heading").text("Order Placed Successfully!!"));
confirmationContainer.append($("<p>").addClass("confirmation-description").text("We have sent you an email with the order details"));

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