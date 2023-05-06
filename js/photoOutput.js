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

    var textAboutDog = [
        "This is Jojo. She is 7 years old and she ended up in a shelter after she stole new things from previous owners.",
        "This is Ray. He is 3 years old and the owners gave him to a shelter after they found out that he was very cold and could not guard the house in Siberia.",
        "This is Coco. She is 2 years old and she ended up in a shelter after her owners found out that she always dreamed of visiting Paris, but they do not have such an opportunity.",
        "This is Barbos. He is 10 months old and abandoned because he looks too old at his young age and his behavior doesn't match his appearance.",
        "This is Pierce. He is 15 years old and sent to an animal shelter because he is no longer as cheerful as before.",
        "This is Lola. She is 2 years old, the owners abandoned her because she was too big for a special carrier for dogs and did not let her go to the cafe with them.",
        "This is Artem. He is 1.5 years old, he ended up in a shelter after living in St. Petersburg. Without the sun, he became covered with blues and the owners could no longer cheer him up.",
        "This is Rocky. He is 3 years old, his elegant owners sent him to an orphanage when they realized that he has a harsh Russian soul and he will never sit quietly at exhibitions and go to museums.",
        "This is Bob. He is 1 year old, he was sent to a shelter because he really wanted to learn how to fly and constantly jumped from the couch, and from everything that could be climbed on.",
        "This is Hans. He is 2 years old and ended up in a shelter after his ugly owner realized he looked better in a photo than her.",
    ];

    var fotoNum = document.querySelectorAll(".gallery__item img");
    for (let j = 0; j<fotoNum.length; j++){
        console.log(fotoNum[j]);
        fotoNum[j].onclick = function(){
            
            document.querySelector(".pop-up").style.display = 'block';
            document.querySelector('.pop-up img').src = fotoNum[j].getAttribute('src');

            let textElement = document.createElement('div');
            textElement.classList.add('about__dog')
            textElement.innerHTML = textAboutDog[j];

            document.querySelector(".pop-up").append(textElement);
        }
    };

    document.querySelector('.pop-up span').onclick = () =>{
        document.querySelector(".pop-up").style.display = 'none';
        
        var text = document.querySelector('.about__dog');
        const parent = text.parentNode;
        parent.removeChild(text);
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

