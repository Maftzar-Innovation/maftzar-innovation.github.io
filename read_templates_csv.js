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

            // Remove the first element if it's empty
            if (header[0] === '') {
                header.shift();
            }

            // Generate HTML content
            let html = '';
            let cardRow1;
            let cardRow2;
            let cardRow3;

            //Generate card rows content 
            cardRow1,cardRow2,cardRow3='<div class="row-container">';
            cardRow1+='<div><h3 class="row-header">מצגות</h3></div>';
            cardRow2+='<div><h3 class="row-header">לוחות זמנים/h3></div>';
            cardRow3+='<div><h3 class="row-header">מסמכים מנהלתיים</h3></div>';
            cardRow1,cardRow2,cardRow3+='<div class="scroller">';



            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');

                // Remove the first element if it's empty
                if (values[0] === '') {
                    values.shift();
                }
         
                //if type=1 =>cardrow1 type=2 =>cardrow2 type=3 =>cardrow3
    
    //       <div class="card-container">
    //         <img class="card-pic" src="pics\powerpoint.PNG" alt="picture">
    //         <div class="card-name"><h3>פרסונה אמפתיה</h3></div>
    //       </div>

                // Generate tile for each row
                html += '<div class="card-container">';
                // Every tile has an image, an h3 title and a description
                html += `<a href=${values[2]}><img class="card-pic" src=${values[3]} alt="picture"></a>`;
                html += `<h3 class="story-header">${values[0]}</h3>`;
                html += `<dl class="story-description">${values[1]}</dl>`;
                html += '</div>';
            
            
            }

            //closing each row
            cardRow1,cardRow2,cardRow3+='</div>';
            cardRow1,cardRow2,cardRow3+='<img class="left" src="pics\next_icon.png" onclick="leftScroll()">';
            cardRow1,cardRow2,cardRow3+='<img class="right" src="pics\next_icon.png" onclick="rightScroll()">';
            cardRow1,cardRow2,cardRow3+='</div>';

            //combining the rows
            html+=cardRow1;
            html+=cardRow2;
            html+=cardRow3;

            // Display content in the tile container
            $('#tileContainer').html(html);
        },
        error: function (error) {
            console.error('Error fetching CSV:', error);
        }
    });
});