let frog = document.querySelector(".frog");
let images = ["https://most-beauty.ru/wp-content/uploads/2018/11/CHernaya-dozhdevaya-lyagushka.jpg",
    "https://i.pinimg.com/736x/85/79/d4/8579d42936cb2013c468e53f1c123231.jpg",
    "https://cs14.pikabu.ru/post_img/big/2022/01/20/7/164267568415067944.jpg"];
let i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return frog.setAttribute("src", "" + images[i]);
}