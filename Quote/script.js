const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy");

// ramdom quoute function
// las quotes ya están previamente construidas github
    //fetching random quotes/data from the API and parsing it into JavaScript object
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading"); //css se definio para que cuando salga el loading se vea un poco más opaco
    });
}

soundBtn.addEventListener("click", ()=>{
    // SpeechSynthesisUtterance is a web speech api that represents a speech of a text
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); // speak method of speechSynthesis speaks the utterance
});

copyBtn.addEventListener("click", ()=>{
    //copy the text with the copyBtn to paste it anywhere
    navigator.clipboard.writeText(quoteText.innerText);
})



quoteBtn.addEventListener("click", randomQuote);

