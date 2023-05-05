window.onload = function() {
    
    var fotoGallery = [
        "/img/gallery/11.jpg",
        "/img/gallery/2.png",
        "/img/gallery/3.jpg",
        "/img/gallery/4.jpg",
        "/img/gallery/5.jpg",
        "/img/gallery/9.jpg",
        "/img/gallery/8.jpg",
        "/img/gallery/1.jpg",
        "/img/gallery/7.jpg",
        "/img/gallery/6.jpg",
    ];

    var shopFoto = [
        "/img/shop/16.jpg",
        "/img/shop/15.jpg",
        "/img/shop/13.jpg",
        "/img/shop/12.jpg",
        "/img/shop/14.jpg",
        "/img/shop/10.jpg",
    ];

    var productsName = [
        "Sideshow Bob Wig",
        "Crown from Game of Thrones",
        "Glasses from the movie Fight club",
        "Genie's Turban from Aladdin",
        "Deer hunter's hat from Sherlock Holmes",
        "Hood from star wars",
    ];

    // -----------------------------------gallery output------------------------------------------

    var galleryFoto = document.createElement("div");
    galleryFoto.classList.add("gallery__items");
    for (var i = 0; i < 10; i++) 
    {
        var dogFoto = document.createElement("div");
        dogFoto.classList.add('gallery__item');

        if (i==0 || i==7){
            dogFoto.classList.add('gallery__item_big');
        };

        var img = document.createElement("img");
        img.src = fotoGallery[i];

        dogFoto.appendChild(img); 
        galleryFoto.appendChild(dogFoto);

    }
    var contentGallery = document.getElementById ('content__gallery');
    contentGallery.appendChild(galleryFoto); 

    document.querySelectorAll(".gallery__item img").forEach(img=>{
        img.onclick = () => {
            document.querySelector(".pop-up").style.display = 'block';
            document.querySelector('.pop-up img').src = img.getAttribute('src');
        }
    });


    document.querySelector('.pop-up span').onclick = () =>{
        document.querySelector(".pop-up").style.display = 'none';
    }
    
    //------------------------------------------------------------shop output--------------------------------------------------------------

    var contentShop = document.getElementById ('products__items');

    for (var i = 0; i < 6; i++) 
    {
        var card = document.createElement("div");
        card.classList.add('products__item');
        
        var image = document.createElement("div");
        image.classList.add('products__image');

        var img = document.createElement("img");
        img.src = shopFoto[i];

        var text = document.createElement("div");
        text.classList.add('products__name');
        text.innerText = productsName[i];

        var btnShop = document.createElement("a");
        btnShop.classList.add('products__button');
        btnShop.innerText = "Pick up now";

        image.appendChild(img);
        card.appendChild(image); //добавляет новые html элементы к существующим
        card.appendChild(text);
        card.appendChild(btnShop);
        contentShop.appendChild(card); 
    }


};

