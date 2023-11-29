function leftScroll(){
    console.log("got into left scroll function");
    const left = document.querySelector(".scroller");
    left.scrollBy(-400,0);
}

function rightScroll(){
    console.log("got into right scroll function");
    const right = document.querySelector(".scroller");
    right.scrollBy(400,0);
}

function createQuestions(value){
    fetch('questioning.json')
        .then((res)=>{
        return res.json();
    })
    .then(data => {
        const currentMenu = data.main_menu[0]["menu"+value];
        const {buttons , question , values} = currentMenu
        
        const existingButtonsContainer = document.querySelector('.screen3 .rect-background .question-container .awesome')
        if (existingButtonsContainer) {
            existingButtonsContainer.remove();
        }        
        const questionContainer = document.querySelector('.screen3 .rect-background .question-container');
        const buttonsContainer = document.createElement('ul');
        buttonsContainer.className = "awesome"
        buttonsContainer.style.listStyleType= "none";
        
        const questionElement = document.createElement('h3')
        questionElement.textContent = question
        buttonsContainer.appendChild(questionElement)

        buttons.forEach((buttonText,index) =>{
            const button = document.createElement('li');
            button.classList.add('answer-rect')
            button.textContent = buttonText;
            button.addEventListener('click',()=>{
                createQuestions(values[index]);
            })
            buttonsContainer.appendChild(button);    
        })
        questionContainer.appendChild(buttonsContainer)
    })
};