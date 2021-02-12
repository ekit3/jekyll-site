const buttonClipBoardTemplate = `<button class="btn btn-sm button-copy-clipboard" alt="Copy example source" onclick="copyToClipBoard(this)"><span aria-hidden="true" aria-label="Copy example source to clipboard" class="material-icons">content_copy</span></button>`;
const select2Template = "<div style='display: flex; align-items:center;'><span class='material-icons'>search</span><span class='search-placeholder'>Chercher un article ...</span></div>";

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