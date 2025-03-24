function addToVars(vars, val) {
    vars.forEach(variable => {
        variable = variable + val;
    });
}

$(document).ready(function () {
    // Fetch CSV file
    $.ajax({
        type: "GET",
        url: "templates.csv",
        dataType: "text",
        success: function (data) {
            // Parse CSV data
            const rows = data.split('\n');
            const header = rows[0].split(',');

            // Remove the first element if it`s empty
            if (header[0] === '') {
                header.shift();
            }

            // Generate HTML content
            let html = '';
            let cardRow1;
            let cardRow2;
            let cardRow3;

            //Generate card rows content 
            // addToVars([cardRow1, cardRow2, cardRow3], `<div class="row-container">`);
            cardRow1=`<div class="row-container">`;
            cardRow2=`<div class="row-container">`;
            cardRow3=`<div class="row-container">`;

            cardRow1+=`<div><h3 class="row-header"> מצגות ותבניות</h3></div>`;
            cardRow2+=`<div><h3 class="row-header">לוחות זמנים</h3></div>`;
            cardRow3+=`<div><h3 class="row-header">מסמכים מנהלתיים</h3></div>`;

            cardRow1+=`<div class="scroller">`;
            cardRow2+=`<div class="scroller">`;
            cardRow3+=`<div class="scroller">`;

            //Generate image arry type=> 0=excel 1=pdf 2=ppt 3=word
            let arr = ['pics/word.jpg','pics/word.jpg','pics/word.jpg','pics/word.jpg'];
            console.log();

            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(`,`);

                // Remove the first element if it`s empty
                if (values[0] === ``) {
                    values.shift();
                }
                
                //if row=1 =>cardrow1 row=2 =>cardrow2 row=3 =>cardrow3 default=>cardrow1
                // Generate tile for each row
                switch(values[0]) {
                    case '1':
                        cardRow1+=`<div class="card-container">`;
                        cardRow1+=`<a href=${values[3]}><img class="card-pic" src=${arr[values[1]]} alt="picture"></a>`;
                        cardRow1+=`<div class="card-name"><h3>${values[2]}</h3></div>`;
                        cardRow1+=`</div>`;
                      break;
                    case '2':
                        cardRow2+=`<div class="card-container">`;
                        cardRow2+=`<a href=${values[3]}><img class="card-pic" src=${arr[values[1]]} alt="picture"></a>`;
                        cardRow2+=`<div class="card-name"><h3>${values[2]}</h3></div>`;
                        cardRow2+=`</div>`;
                      break;
                      case '3':
                        cardRow3+=`<div class="card-container">`;
                        cardRow3+=`<a href=${values[3]}><img class="card-pic" src=${arr[values[1]]} alt="picture"></a>`;
                        cardRow3+=`<div class="card-name"><h3>${values[2]}</h3></div>`;
                        cardRow3+=`</div>`;
                      break;
                    default:
                        cardRow1+=`<div class="card-container">`;
                        cardRow1+=`<a href=${values[3]}><img class="card-pic" src=${arr[values[1]]} alt="picture"></a>`;
                        cardRow1+=`<div class="card-name"><h3>${values[2]}</h3></div>`;
                        cardRow1+=`</div>`;
                  }
            
            }

            //closing each row
            cardRow1+=`</div>`;
            cardRow2+=`</div>`;
            cardRow3+=`</div>`;

            cardRow1+=`<img class="left" src="pics/next_icon.png" onclick="leftScroll(this)">`;
            cardRow2+=`<img class="left" src="pics/next_icon.png" onclick="leftScroll(this)">`;
            cardRow3+=`<img class="left" src="pics/next_icon.png" onclick="leftScroll(this)">`;
            
            cardRow1+=`<img class="right" src="pics/next_icon.png" onclick="rightScroll(this)">`;
            cardRow2+=`<img class="right" src="pics/next_icon.png" onclick="rightScroll(this)">`;
            cardRow3+=`<img class="right" src="pics/next_icon.png" onclick="rightScroll(this)">`;
            
            cardRow1+=`</div>`;
            cardRow2+=`</div>`;
            cardRow3+=`</div>`;

            //combining the rows
            html+=cardRow1;
            html+=cardRow2;
            html+=cardRow3;

            // Display content in the tile container
            $(`#tileContainer`).html(html);
        },
        error: function (error) {
            console.error(`Error fetching CSV:`, error);
        }
    });
});