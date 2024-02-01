<!DOCTYPE html>
<html>
  <head>
    <title>The Innovation Website</title>
    <!-- <meta charset="UTF-8"> -->
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <link rel="stylesheet" href="styles\toolArsenalPage.css">
    <link rel="stylesheet" href="styles\general.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="pics/favicon.png">
   
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;900&display=swap" rel="stylesheet">
  </head>

  <body>
<!--header - contains navigation bar and search bar-->
    <div class="header">
        <div class="right-section">
            <a class="nav-bar" href="homePage.aspx" style="text-decoration:none; color: #d0d0d0;">דף הבית</a>
            <a class="nav-bar" href="templates.aspx" style="text-decoration:none; color: #ffffff;">תבניות שימושיות</a>
            <a class="nav-bar" href="stories.aspx" style="text-decoration:none; color: #d0d0d0;">כתבות</a>
            <a class="nav-bar" href="toolArsenalPage.aspx" style="text-decoration:none; color: #d0d0d0;">ארסנל כלים</a>
        </div>
      <input class="search-bar" type="text" placeholder="חפש/י">
    </div>

    <h2 class="page-header">תבניות שימושיות</h2>
          <div id="tileContainer" class="tile-container"></div>
          <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
          <script src="read_templates_csv.js"></script>
          <script src="homePage.js"></script>
  </body>
</html>