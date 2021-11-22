let template = document.querySelector(".processo").cloneNode(true);
document.querySelector(".processo").remove()
let removeGranParent = function () { this.parentElement.parentElement.remove(); }
let colapseAll = function () {
    document.querySelectorAll('.show')
        .forEach(x => x.previousElementSibling.firstElementChild.click())
}
let nProcessos = 1;

let plans = {
    'starter': {
        'minutes': 30,
        'steps': 30,
        'timing': 'lifetime',
        'monthly': 0,
        'anual': 0
    },
    'business': {
        'minutes': 375,
        'steps': 0,
        'monthly': 25,
        'anual': 27.5 * 12
    },
    'edge': {
        'minutes': 0,
        'steps': 100,
        'monthly': 25,
        'anual': 27.5 * 12
    },
    'professional': {
        'minutes': 375,
        'steps': 100,
        'monthly': 45,
        'anual': 49.5 * 12
    },
    'enterprise': {
        'minutes': '∞',
        'steps': '∞',
        'monthly': 86000 / 12,
        'anual': 86000
    }
}


document.querySelector("#adicionar").onclick = function () {
    colapseAll();
    let element = template.cloneNode(true);
    element.querySelector("#remove").onclick = removeGranParent;
    element.querySelector(".propreties").id = "p" + nProcessos;
    element.querySelector(".arrow").dataset["bsTarget"] = "#p" + nProcessos;
    element.querySelector("#nome").value = "Processo " + nProcessos++;
    document.querySelector("#processos").appendChild(element);
}

document.querySelectorAll('#plans input').forEach(x => x.onclick = function () {
    let plano = this.id;
    updateChart([7000, plans[plano].anual])
    console.log(plans[plano].anual)

})