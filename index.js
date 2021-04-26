var productList;
try{
  $.ajax({
    type:"GET",
    url:"https://5d76bf96515d1a0014085cf9.mockapi.io/product",
    async: true,
    success: function(response){
      mainCode(response);
    }
  })  
}catch(e){
  console.log(e);
}

function mainCode(productList){

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

  // -----------------------------------Homepage Slider---------------------------------------
  var sliderContainer = $("<div>").addClass("slider-container");
  mainContainer.append(sliderContainer);
  sliderContainer.append($("<img>").addClass("slider-item").attr("src","slide1.png"));
  sliderContainer.append($("<img>").addClass("slider-item").attr("src","slide2.png"));
  sliderContainer.append($("<img>").addClass("slider-item").attr("src","slide3.png"));
  sliderContainer.append($("<img>").addClass("slider-item").attr("src","slide4.png"));
  sliderContainer.slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1500
  })

  function displayProductCard(gridContainer,cardPreview, cardName, cardBrand, cardPrice, id){
    var productCard = $("<div>").attr("id",id);
    productCard.addClass("product-card");
    gridContainer.append(productCard);

    productCard.click(function(){
      console.log(productCard.attr("id"));
      location.assign('./product.html?id='+id);
    })

    var thumbnail = $("<img>");
    thumbnail.addClass("card-thumbnail");
    thumbnail.attr("src",cardPreview);
    productCard.append(thumbnail);

    var productCardContainer = $("<section>").addClass("product-card-container");
    productCard.append(productCardContainer);

    var description = $("<h3>");
    description.addClass("description");
    description.text(cardName);
    productCardContainer.append(description);

    var brand = $("<h4>");
    brand.addClass("brand");
    brand.text(cardBrand);
    productCardContainer.append(brand);

    var price = $("<h5>");
    price.addClass("price");
    price.text("Rs "+cardPrice);
    productCardContainer.append(price);
  }
  //Designing product grids
  var clothingGrid = $("<section>").addClass("grid-section");
  clothingGrid.attr("id","clothing-grid");
  mainContainer.append(clothingGrid);

  var sectionHeading = $("<h2>");
  sectionHeading.addClass("section-title");
  sectionHeading.text("Clothing for Men and Women");
  clothingGrid.append(sectionHeading);

  var clothingGridContainer = $("<div>");
  clothingGridContainer.addClass("grid-container");
  clothingGrid.append(clothingGridContainer);

  var cPrevArrow = $("<i>").attr("class","fas fa-chevron-left prevArrow");
  clothingGrid.append(cPrevArrow);
  var cNextArrow = $("<i>").attr("class","fas fa-chevron-right nextArrow");
  clothingGrid.append(cNextArrow);

  var accessoriesGrid = $("<section>").addClass("grid-section");
  accessoriesGrid.attr("id","accessories-grid");
  mainContainer.append(accessoriesGrid);

  var sectionHeading2 = $("<h2>");
  sectionHeading2.addClass("section-title");
  sectionHeading2.text("Accessories for Men and Women");
  accessoriesGrid.append(sectionHeading2);

  var accessoriesGridContainer = $("<div>");
  accessoriesGridContainer.addClass("grid-container");
  accessoriesGrid.append(accessoriesGridContainer);

  for( var i=0; i<productList.length; i++){
    if(productList[i].isAccessory === true){
      displayProductCard(accessoriesGridContainer,productList[i].preview,productList[i].name,productList[i].brand,productList[i].price,productList[i].id);
    }
    else{
      displayProductCard(clothingGridContainer,productList[i].preview,productList[i].name,productList[i].brand,productList[i].price,productList[i].id);
    }
  }

  var aPrevArrow = $("<i>").attr("class","fas fa-chevron-left prevArrow");
  accessoriesGrid.append(aPrevArrow);
  var aNextArrow = $("<i>").attr("class","fas fa-chevron-right nextArrow");
  accessoriesGrid.append(aNextArrow);

  // slick slider effects to grid sections
  clothingGridContainer.slick({
      dots: false,
      infinite: false,
      slidesToShow: 5,
      nextArrow: cNextArrow,
      prevArrow: cPrevArrow,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            nextArrow: cNextArrow,
            prevArrow: cPrevArrow
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            nextArrow: cNextArrow,
            prevArrow: cPrevArrow
          }
        },
        {
          breakpoint: 469,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            nextArrow: cNextArrow,
            prevArrow: cPrevArrow
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    accessoriesGridContainer.slick({
      dots: false,
      infinite: false,
      slidesToShow: 5,
      nextArrow: aNextArrow,
      prevArrow: aPrevArrow,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            nextArrow: aNextArrow,
            prevArrow: aPrevArrow
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            nextArrow: aNextArrow,
            prevArrow: aPrevArrow
          }
        },
        {
          breakpoint: 469,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            nextArrow: aNextArrow,
            prevArrow: aPrevArrow
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    // Designing Homepage Footer section

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

  var productListData = window.localStorage.getItem("product-list") === null || window.localStorage.getItem("product-list") === '' ? [] : JSON.parse(window.localStorage.getItem("product-list"));
  var atcCount = 0;
    for(var i=0; i<productListData.length; i++){
      atcCount = atcCount + productListData[i].count;
    }
  cartCounter.text(atcCount);
}


