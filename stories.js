// json for the articles
const jsonData = {
    "articles": {
        "article1": "words/idontlikeit.docx",
        "article2": "words/saveme.docx",
    },
    "titles":{
        "title1":"5 עצות לחדשן הצבאי המתחיל",
        "title2":"הצילו אותי"
    }
}
// loading the preview
function PreviewWordDoc(index) {
    
    const article = jsonData.articles
    const propertyName = 'article'+ (index + 1)

    const docUrl = article[propertyName];
    if (docUrl){
        //URL of the Word Document.
        var url = docUrl;   
        //Send a XmlHttpRequest to the URL.
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "blob";
        request.onload = function () {
            //Set the ContentType to docx.
            var contentType =
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    
            //Convert BLOB to File object.
            var doc = new File([request.response], contentType);
    
            //If Document not NULL, render it.
            if (doc != null) {
            //Set the Document options.
            var docxOptions = Object.assign(docx.defaultOptions, {
                useMathMLPolyfill: true,
            });
            //Reference the Container DIV.
            var container = document.querySelector(".cards-wrapper #word-container");
    
            //Render the Word Document.
            docx.renderAsync(doc, container, null, docxOptions);
            }
        };
        request.send();

    } else {
        console.error('document url')
    }
}
  

function createDivs() {
    article = jsonData.articles
    titles = jsonData.titles
    const tileContainer = document.createElement('div')
    tileContainer.className = "tile-container"

    for (let i = 0; i < Object.keys(article).length;i++){
        const cardContainer = document.createElement('div')
        cardContainer.className = "card-container"
        const title = document.createElement('h3')
        title.style.textAlign = "center"
        title.style.position = "relative"
        title.style.bottom = "6vw"
        title.textContent = titles["title" + (i+1)]
        const img = document.createElement('img')
        img.className = 'card-pic'
        img.src = 'jpg_pics/storyImg.jpg'
        img.addEventListener('click', ()=>{
            PreviewWordDoc(i)
        })
        cardContainer.appendChild(img)
        cardContainer.appendChild(title)
        tileContainer.appendChild(cardContainer)
    }
    document.querySelector('.cards-wrapper').appendChild(tileContainer)
}
