window.onload = function() {
    console.log("fff");
    var foto = [
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

    var galleryFoto = document.createElement("div");
    galleryFoto.classList.add("gallery__items");
    for (var i = 0; i < 10; i++) 
        {
            var d = document.createElement("div");
            d.classList.add('gallery__item');
            if (i==0 || i==7){
                d.classList.add('gallery__item_big');
            };
            var img = document.createElement("img");
            img.src = foto[i];

            d.appendChild(img); //добавляет новые html элементы к существующим
            galleryFoto.appendChild(d);
        }
    var contentGallery = document.getElementById ('content__gallery');
    contentGallery.appendChild(galleryFoto); 
};

