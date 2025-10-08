const subjectDOM = document.getElementById("subject");
const auxverb1DOM = document.getElementById("auxverb1");
const gerund1DOM = document.getElementById("gerund1");
const article1DOM =document.getElementById("article1");
const object1DOM = document.getElementById("object1");
const conjuctionDOM = document.getElementById("conjuction");
const article2DOM = document.getElementById("article2");
const object2DOM = document.getElementById("object2");
const auxverb2DOM = document.getElementById("auxverb2")
const gerund2DOM = document.getElementById("gerund2");
const article3DOM = document.getElementById("article3");
const object3DOM = document.getElementById("object3");
const punctuationDOM = document.getElementById("punctuation");
const generate = document.getElementById("generate")
const result = document.getElementById("result")


function combine(subject,auxverb1,gerund1,article1,object1,conjuction,article2,object2,auxverb2,gerund2,article3,object3,punctuation){
    return `${subject} ${auxverb1} ${gerund1} ${article1} ${object1}, ${conjuction} ${article2} ${object2} ${auxverb2} ${gerund2} ${article3} ${object3}${punctuation}`
}


generate.onclick = function(){
result.textContent = combine(subjectDOM.value,
        auxverb1DOM.value,
        gerund1DOM.value,
        article1DOM.value,
        object1DOM.value,
        conjuctionDOM.value,
        article2DOM.value,
        object2DOM.value,
        auxverb2DOM.value,
        gerund2DOM.value,
        article3DOM.value,
        object3DOM.value,
        punctuationDOM.value,
        )
    result.style.backgroundColor = "yellow"
    result.style.display = "inline-block"
}


