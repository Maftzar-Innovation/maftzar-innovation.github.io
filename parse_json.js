$(document).ready(function () {
    // Fetch CSV file
    $.ajax({
        type: "GET",
        url: "sample.csv",
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
                html += '<div class="tile card-container">';
                // Every tile has an image, an h3 title and a description
                html += '<img class="card-pic" src="pics\storyImg.PNG" alt="picture">';
                html += `<h3><strong>${header[j]}:</strong> ${values[j]}</h3>`;
                for (let j = 0; j < values.length; j++) {          
                    html += `<p><strong>${header[j]}:</strong> ${values[j]}</p>`;
                }
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