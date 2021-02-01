const buttonClipBoardTemplate = `<div class='button-copy-clipboard' onclick="copyToClipBoard(this.parentElement.textContent)"><button>copy</button></div>`

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.getElementsByClassName('language-ruby');
    for(let element of elements){
        element.innerHTML += element.innerHTML + buttonClipBoardTemplate;
    }
});

copyToClipBoard = (e) => {
    navigator.clipboard.writeText(e);
};
