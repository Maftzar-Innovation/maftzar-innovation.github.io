
let searchInput;
let websiteData = [];
let csvData;

window.addEventListener('load', () => {
    createEventRect();   
    loadData();
    document.getElementById('search-bar').addEventListener('input', () => {
      searchFunction();
    });
})

function createEventRect(){
  //creates the event rectangles 
    let textArray = [
        {
            date: '29.11',
            text: 'וובינר'
        },
        {
            date: '29.11',
            text: 'וובינר'
        },
        {
            date: '29.11',
            text: 'וובינר'
        },
        {
            date: '29.11',
            text: 'וובינר'
        },
        {
            date: '29.11',
            text: 'וובינר'
        },
    ]
    for (let i = 0; i <textArray.length; i++) {
       let newDiv = document.createElement('div');
       newDiv.innerHTML = `<div class="event-date">${textArray[i].date}</div> <div class="event-text">${textArray[i].text}</span>`;
       newDiv.classList.add('event-rect');
        document.getElementById('event-rect-container').appendChild(newDiv);
    }
  
}
async function loadData() {
  let partsToSearch = ['innovation_tools/accelerator.aspx', 'innovation_tools/design_thinking.aspx',
   'innovation_tools/hackathon.aspx', 'innovation_tools/jtbd-DESKTOP-UB4M0PG.aspx', 'innovation_tools/incubator.aspx', 
   'innovation_tools/jtbd.aspx', 'innovation_tools/mvp.aspx'];


   //get data from toםl arsenal page
  for (let i = 0; i < partsToSearch.length; i++) {  
    // Fetch HTML content for a given file
    const response = await fetch(`${partsToSearch[i]}`);
    const htmlContent = await response.text();

    // Create a temporary element to parse the HTML
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlContent;
    currentPart = partsToSearch[i];

    // Extract the header content 
    const headerElement = tempElement.querySelector('.page-header');
    const webPartData = {
      title: `${headerElement.textContent}`,
      location: 'ארסנל כלים',
      link: `${partsToSearch[i]}`
    }

    websiteData.push(webPartData);


    //get the data from the templates csv file
      fetch('templates.csv')
      .then(response => response.text())
      .then(data => {
        csvData = data;
      });
  }
  }



  function searchFunction() {
    searchInput = document.getElementById('search-bar').value;
    const rows = csvData.split('\n');
    const csvResults = [];
    const webResults = [];

    // Iterate through each row to search for the query in CSV titles
    for (let i = 1; i < rows.length; i++) {
        const columns = rows[i].split(',');
        const title = columns[2];

        if (title.toLowerCase().includes(searchInput.toLowerCase())) {
            csvResults.push({
                title: title,
                location: 'תבניות שימושיות',
                link: columns[3],
            });
        }
    }

    // Iterate through website data to search for the query in titles
    websiteData.forEach((webPartData) => {
        if (webPartData.title.toLowerCase().includes(searchInput.toLowerCase())) {
            webResults.push(webPartData);
        }
    });

    // Merge the results for display
    const results = [...csvResults, ...webResults];

    document.getElementById('search-results').innerHTML = '';

    if (searchInput !== '') {
        // Create and append div elements for each result
        results.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.setAttribute('class', 'search-result');
            resultDiv.innerHTML = `<p>${result.title} - ${result.location}</p>`;
            document.getElementById('search-results').appendChild(resultDiv);
            resultDiv.addEventListener('click', () => {
                window.location.href = result.link;
            });
        });
    }
}

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
}
