const textComment = document.querySelector('.textComment');
const commentSection = document.querySelector('.commentSection');
textComment.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendComment();
    }
})
function sendComment() {
    const comment = textComment.value;
    const finalComment = checkSpam(comment);
    showMessage(finalComment);
    textComment.value = '';
}
function checkSpam(str) {
   return str.replace(/xxx|viagra|ig|porn|horny|tits/i, "****");
}
function showMessage(str) {
    commentSection.insertAdjacentHTML("beforeend", `<div class="comment">${str}</div>`);
}
