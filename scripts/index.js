const buttonClipBoardTemplate = `<button class='button-copy-clipboard btn btn-light btn-sm' onclick="copyToClipBoard(this.parentElement.textContent)">copy</button>`

document.addEventListener('DOMContentLoaded', () => {

    const elements = document.getElementsByClassName('language-ruby');
    for(let element of elements){
        element.innerHTML += element.innerHTML + buttonClipBoardTemplate;
    }
    // init select2
    $('.search-article').select2({
        placeholder: "Search an article...",
        width: '100%'
    }).on('select2:select', function (e) {
        window.location.href = e.params.data.id;
    });
});

copyToClipBoard = (e) => {
    navigator.clipboard.writeText(e);
};