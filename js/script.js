const boxInter = document.querySelector("#boxInter");
const boxTec = document.querySelector("#boxTec");
const boxB = document.querySelector("#boxB");
const boxS = document.querySelector("#boxS");

let pessoal = [
    "Determinacao",
    "Trabalho em equipe",
    "Vontade",
    "Foco",
    "Criatividade"
];

let tecno = [
    "Git",
    "Github",
    "HTML",
    "Java",
    "Python",
    "Css",
    "JavaScript",
    "Testes assincronos",
    "Jest"
];

let blogs = [
    "Codigo Fonte",
    "Trybe",
    "DioLinux",
    "CyberSec Hub",
    "DevMedia"
];

let links = [
    "https://www.codigofonte.com.br/tag/blog",
    "https://blog.betrybe.com/",
    "https://diolinux.com.br/",
    "https://www.cshub.com/",
    "https://www.devmedia.com.br/"
];

let sociais = [
    "https://github.com/Naillton",
    "https://www.linkedin.com/in/nailton-junior-6620951b1/",
    "https://www.instagram.com/nailtonjunior2/"
];

let contas = [
    "Github",
    "Linkedin",
    "Instagram"
];

function elementosPessoais(){
    for(let item of pessoal){
        let lista = document.createElement('li');
        lista.innerText = item
        boxInter.appendChild(lista)
    }
}

elementosPessoais();

function elementoTecnologico(){
    for(let cont of tecno ){
        let list = document.createElement('li');
        list.innerText = cont
        boxTec.appendChild(list)
    }
}

elementoTecnologico();

function elementoBlog(){
    for(let i = 0; i < links.length; i += 1){
        let lista = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute("href", links[i]);
        a.setAttribute("target", "_blank");
        for(let blog = 0; blog < blogs.length; blog += 1){
            a.innerText = blogs[i];
            lista.appendChild(a);
            boxB.appendChild(lista);
        }
    }
}

elementoBlog();

function account(){
    for(let i = 0; i < sociais.length; i += 1){
        let a = document.createElement('a');
        let li = document.createElement('li');
        a.setAttribute("href", sociais[i]);
        a.setAttribute("target", "_blank");
        for(let conta = 0; conta < contas.length; conta += 1){
            a.innerText = contas[i]
            li.appendChild(a);
            boxS.appendChild(li)
        }
    }
}

account();