function howOld () {
    let age = document.querySelector('.age').value;
    if(age > 18) {
        alert(`Welcome to CatHub!`);
    } else if(age < 18) {
        alert(`You are not allowed to visit this page!`);
    } else if(age == 18) {
        alert(`Welcome to CatHub, young fella!`);
    }
}