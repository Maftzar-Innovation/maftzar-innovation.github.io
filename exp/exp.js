function Func(value){
    fetch('questioning.json')
        .then((res)=>{
        return res.json();
    })
    .then(data => {
        const buttonsData = data.main_menu[0]["option"+value].buttons;
        const existingButtonsContainer = document.querySelector('.cool')
        if (existingButtonsContainer) {
            existingButtonsContainer.remove();
        }        
        
        
        const buttonsContainer = document.createElement('ol');
        buttonsContainer.classList.add("cool")
        buttonsContainer.style.display = 'inline-grid'
        

        buttonsData.forEach((buttonText, index) =>{
            const button = document.createElement('button');
            button.classList.add('awsome')
            button.textContent = buttonText;
            button.value = index + 1;
            button.addEventListener('click',()=>{
                Func(button.value);
            })
            buttonsContainer.appendChild(button);    
        })
        document.body.appendChild(buttonsContainer)
    })
};

