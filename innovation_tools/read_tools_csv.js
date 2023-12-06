$(document).ready(function () {
    // Fetch CSV file
    $.ajax({
        type: "GET",
        url: "innovation_tools/tools.csv",
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

            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');

                // Remove the first element if it's empty
                if (values[0] === '') {
                    values.shift();
                }

                // Generate tile for each row
                html += '<div class="card-container">';
                // Every tile has an image, an h3 title and a description
                html += `<a href=${values[2]}><img class="card-pic" src=${values[3]} alt="picture"></a>`;
                html += `<h3 class="story-header">${values[0]}</h3>`;
                html += `<dl class="story-description">${values[1]}</dl>`;
                html += '</div>';
            }

            // Display content in the tile container
            $('#tileContainer').html(html);
        },
        error: function (error) {
            console.error('Error fetching CSV:', error);
        }
    });
});