window.addEventListener('message', function (event) {
    if (event.origin === "http://127.0.0.1:5500" ) {
        addData(event.data.msg)
    }
})
function addData(index) {
    if (sessionStorage.temp != "undefined"){
    } else {
        sessionStorage.temp = index
    }

    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "./markdowns/stories1.csv",
            dataType: "text",
    
            success: function(data) {
                const rows = data.split("\n");
                // Assuming the header is in the first row
                const column = rows[0].split(",");
    
                // Find the index of the columns you want
                const columnIdIndex = column.indexOf('id');
                const columnLinkIndex = column.indexOf('link');
    
                // Replace 'desiredId' with the specific ID you want to retrieve
                const desiredId = index;

                for (let i = 1; i < rows.length; i++) {
                    const values = rows[i].split(',');
    
                    if (values[0] === '') {
                        values.shift();
                    }
    
                    // Access data from the specific columns using the column indices
                    const currentId = values[columnIdIndex];
                    const columnLinkData = values[columnLinkIndex];

    
                    // Check if the current row has the desired ID
                    if (currentId === desiredId && currentId != undefined) {

                        $(".page-header")[0].textContent = values[1]

                        
                        // $("<zero-md src=${columnLinkData}></zero-md>")
                        const zero = document.createElement("zero-md");
                        zero.src = columnLinkData;
                        


                        const temp = document.createElement("template");
                        zero.appendChild(temp);

    
                        if ($(".text").is(":empty")) {
                            // document.querySelector(".text").appendChild(zero);
                            $(".text").append(zero)
                        } else {
                            $(".text").empty(zero)
                            addData(index)
                        }
                        
                        // Break the loop since you found the desired ID
                        break;
                    }
                }
            }
        });
    });  
}

function createDivs() {
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "./markdowns/stories1.csv",
            dataType: "text",
    
            success: function(data) {
                const rows = data.split("\n");
                // Assuming the header is in the first row
                const column = rows[0].split(",");
                
                
                // const columnTitleIndex = column.indexOf('title')

                const tileContainer = document.querySelector('#tileContainer')

                for (let i = 1; i< rows.length; i++){
                    if (rows[i] != ""){
                        const values = rows[i].split(",")
                        const cardContainer = document.createElement("div");
                        cardContainer.className = "card-container";
                        const title = document.createElement('h3')
                        title.style.position = "relative"
                        title.style.bottom = "7vw"
                        title.textContent = values[1]
                        const des = document.createElement("p")
                        des.style.position = "relative"
                        des.style.bottom = "7vw"
                        des.style.fontSize = "1.1vw"
                        des.textContent = values[2]
                        const img = document.createElement("img")
                        img.className = "card-pic"
                        img.src = values[4]
                        cardContainer.addEventListener("click", () =>{
                            openSiteB(values[0])
                        })
                        cardContainer.appendChild(img)
                        cardContainer.appendChild(title)
                        cardContainer.appendChild(des)
                        tileContainer.appendChild(cardContainer)

                    }
                    
                }
            }})})}

function openSiteB(myValue) {
    let dataToSend = { msg: myValue };
    const siteBWindow = window.open("articles.aspx");

    siteBWindow.addEventListener("load", function () {
        siteBWindow.postMessage(dataToSend, "http://127.0.0.1:5500/exp.aspx");
    });
    }


