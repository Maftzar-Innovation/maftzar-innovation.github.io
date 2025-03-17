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
            <a class="nav-bar" href="./homePage.aspx" style="text-decoration:none; color: #d0d0d0;">דף הבית</a>
            <a class="nav-bar" href="./templates.aspx" style="text-decoration:none; color: #d0d0d0;">תבניות שימושיות</a>
            <a class="nav-bar" href="./stories.aspx" style="text-decoration:none; color: #d0d0d0;">כתבות</a>
            <a class="nav-bar" href="./toolArsenalPage.aspx" style="text-decoration:none; color: #ffffff;">ארסנל כלים</a>
        </div>
      <input class="search-bar" type="text" placeholder="חפש/י">
    </div>

    <h2 class="page-header">ארסנל הכלים לסטרטאפיסט הצבאי</h2>
    <div class="row-container">
        <div><h3 class="row-header">אפיון הבעיה</h3></div>
        <div class="scroller">
          <div class="card-container">
            <a href="innovation_tools\jtbd.aspx"><img class="card-pic" src="pics\img1.jfif" alt="picture"></a>
            <div class="card-name"><h3>מתודת JTBD</h3></div>
            <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
          </div>  
          <div class="card-container">
            <img class="card-pic" src="pics\img2.jfif" alt="picture">
            <div class="card-name"><h3>אפיון תהליכי עבודה</h3></div>
            <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
          </div>
          <div class="card-container">
            <img class="card-pic" src="pics\img3.jpg" alt="picture">
            <div class="card-name"><h3>מחקר - אתגר</h3></div>
            <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
          </div>
          <div class="card-container">
            <img class="card-pic" src="pics\img4.jpg" alt="picture">
            <div class="card-name"><h3>5 whys</h3></div>
            <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
          </div>
          <div class="card-container">
            <img class="card-pic" src="pics\img5.jpg" alt="picture">
            <div class="card-name"><h3>פרסונה אמפתיה</h3></div>
            <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
          </div>
          </div>
            <img class="left" src="pics\next_icon.png" onclick="leftScroll()">
            <img class="right" src="pics\next_icon.png" onclick="rightScroll()">
    </div>
    <div class="row-container">
      <div><h3 class="row-header">מנגנונים לחדשנות</h3></div>
      <div class="scroller">
        <div class="card-container">
          <a href="innovation_tools\hackathon.aspx"><img class="card-pic" src="pics\img11.jpg" alt="picture"></a>
          <div class="card-name"><h3>האקתון</h3></div>
          <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
        </div>  
        <div class="card-container">
          <a href="innovation_tools\design_thinking.aspx"><img class="card-pic" src="pics\img12.jpg" alt="picture"></a>
          <div class="card-name"><h3>Design Thinking</h3></div>
          <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
        </div>
        <div class="card-container">
          <img class="card-pic" src="pics\img13.jpg" alt="picture">
          <div class="card-name"><h3>וובינר</h3></div>
          <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
        </div>
        <div class="card-container">
          <a href="innovation_tools\accelerator.aspx"><img class="card-pic" src="pics\img14.jpg" alt="picture"></a>
          <div class="card-name"><h3>אקסלרטור</h3></div>
          <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
        </div>
        <div class="card-container">
          <a href="innovation_tools\incubator.aspx"><img class="card-pic" src="pics\img15.jpg" alt="picture"></a>
          <div class="card-name"><h3>אינקובטור</h3></div>
          <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
        </div>
        </div>
          <img class="left" src="pics\next_icon.png" onclick="leftScroll()">
          <img class="right" src="pics\next_icon.png" onclick="rightScroll()">
  </div>
  <div class="row-container">
    <div><h3 class="row-header">עולם הפתרון</h3></div>
    <div class="scroller">
      <div class="card-container">
        <img class="card-pic" src="pics\img21.jpg" alt="picture">
        <div class="card-name"><h3>POC</h3></div>
        <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
      </div>  
      <div class="card-container">
        <img class="card-pic" src="pics\img22.jpg" alt="picture">
        <div class="card-name"><h3>SCAMPER</h3></div>
        <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
      </div>
      <div class="card-container">
        <a href="innovation_tools\mvp.aspx"><img class="card-pic" src="pics\img23.jpg" alt="picture"></a>
        <div class="card-name"><h3>MVP</h3></div>
        <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
      </div>
      <div class="card-container">
        <img class="card-pic" src="pics\img24.jpg" alt="picture">
        <div class="card-name"><h3>Agile</h3></div>
        <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
      </div>
      <div class="card-container">
        <img class="card-pic" src="pics\img25.jpg" alt="picture">
        <div class="card-name"><h3>מודל הקנבס</h3></div>
        <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
      </div>
      </div>
        <img class="left" src="pics\next_icon.png" onclick="leftScroll()">
        <img class="right" src="pics\next_icon.png" onclick="rightScroll()">
</div>
<div class="row-container">
  <div><h3 class="row-header">תחקור ומדידה</h3></div>
  <div class="scroller">
    <div class="card-container">
      <img class="card-pic" src="pics\img31.jpg" alt="picture">
      <div class="card-name"><h3>KPI'S</h3></div>
      <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
    </div>  
    <div class="card-container">
      <img class="card-pic" src="pics\img32.jpg" alt="picture">
      <div class="card-name"><h3>שיטות מדידה</h3></div>
      <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
    </div>
    </div>
      <img class="left" src="pics\next_icon.png" onclick="leftScroll()">
      <img class="right" src="pics\next_icon.png" onclick="rightScroll()">
</div>
<div class="row-container">
  <div><h3 class="row-header">שיווק ושכנוע</h3></div>
  <div class="scroller">
    <div class="card-container">
      <img class="card-pic" src="pics\img41.jpg" alt="picture">
      <div class="card-name"><h3>פיץ'</h3></div>
      <div class="card-label"><p class="label">מאמץ גבוה</p><p class="label">אירוע</p></div>
    </div>  
      <img class="left" src="pics\next_icon.png" onclick="leftScroll()">
      <img class="right" src="pics\next_icon.png" onclick="rightScroll()">
</div>
  </body>
</html>