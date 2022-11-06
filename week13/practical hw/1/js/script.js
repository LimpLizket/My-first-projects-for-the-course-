function greetings() {
let person = prompt('What is your name?');
if(person){
    alert(`Hello, ${person}!`);
} else{
    alert('I need to know your name, please introduce yourself!');
    prompt('What is your name?');
} 
}