const buttonClipBoardTemplate = `<button class='button-copy-clipboard btn btn-light btn-sm' onclick="copyToClipBoard(this.parentElement.textContent)">Copier</button>`

document.addEventListener('DOMContentLoaded', () => {

    const elements = document.getElementsByClassName('language-ruby');
    for(let element of elements){
        element.innerHTML += element.innerHTML + buttonClipBoardTemplate;
    }
    // init select2
    $('.search-article').select2({
        placeholder: "<div style='display: flex; align-items:center;'><span class='material-icons' style='font-size:18px; margin-right: 5px'>search</span>Chercher un article ...</div>",
        escapeMarkup: function (markup) { return markup; },
        width: '100%'
    }).on('select2:select', function (e) {
        window.location.href = e.params.data.id;
    });
});

copyToClipBoard = (e) => {
    navigator.clipboard.writeText(e);
};

function goBackHistory() {
    window.history.back();
}