let template = document.querySelector(".processo").cloneNode(true);
document.querySelector(".processo").remove()
let removeParent = function () { this.parentElement.remove(); }

document.querySelector("#adicionar").onclick = function () {
    let element = template.cloneNode(true);
    element.querySelector("#remove").onclick = removeParent;
    document.querySelector("#processos").appendChild(element)
}
$("#processos");