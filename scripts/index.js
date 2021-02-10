const buttonClipBoardTemplate = `<button class='button-copy-clipboard btn btn-light btn-sm' onclick="copyToClipBoard(this)">Copier</button>`;
const select2Template = "<div style='display: flex; align-items:center;'><span class='material-icons' style='font-size:18px; margin-right: 5px'>search</span>Chercher un article ...</div>";

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll (".highlighter-rouge code")
    for(let element of elements){
        element.parentNode.innerHTML += buttonClipBoardTemplate;
    }
    // init select2
    $('.search-article').select2({
        placeholder: select2Template,
        escapeMarkup: function (markup) { return markup; },
        width: '100%'
    }).on('select2:select', function (e) {
        window.location.href = e.params.data.id;
    });
});

copyToClipBoard = (e) => {
    //to remove button copy clipboard from text copy
    const text = e.offsetParent.firstChild.innerText;
    navigator.clipboard.writeText(text);
};

function goBackHistory() {
    window.history.back();
}