<!DOCTYPE html>
<html>
  <head>
    <title>The Innovation Website</title>
    <!-- <meta charset="UTF-8"> -->
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link rel="stylesheet" href="styles\homePageScreen.css">
    <link rel="stylesheet" href="styles\general.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="pics/favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;900&display=swap" rel="stylesheet">

    <script src="homePage.js" defer></script>
  </head>
  
  <body>
    <!-- 1st screen -->
    <div class="screen1">
      <!-- robot and gradiant background -->
      <img src="pics\hilaRobotResult.png" class="baymax-pic">
      <img src="pics\gradiant.png" class="gradiant-pic">

      <!--header - contains navigation bar and search bar-->
      <div class="header">
        <div class="right-section">
          <a class="nav-bar" href="homePage.aspx" style="text-decoration:none; color: #ffffff;">דף הבית</a>
          <a class="nav-bar" href="templates.aspx" style="text-decoration:none; color: #d0d0d0;">תבניות שימושיות</a>
          <a class="nav-bar" href="stories.aspx" style="text-decoration:none; color: #d0d0d0;">כתבות</a>
          <a class="nav-bar" href="toolArsenalPage.aspx" style="text-decoration:none; color: #d0d0d0;">ארסנל כלים</a>
          <div class="contact-button">
            <img src="pics/contact us.png" style="width: 3vw; height: 6vh; position: absolute; top: 0.5vh; left: 0.5vw; display: inline-block;">
          <div class="contact-frame">
            <span style="display: flex; flex-direction: column; row-gap: 10px">
              <span style="display: flex; align-items: center; column-gap: 5px">
                <img
                  src="pics\icons8-phone-50.png"
                  alt="phone pic"
                  style="width: 20px; height: 20px"
                />
                <span>0558838257</span>
              </span>
              <span style="display: flex; align-items: center; column-gap: 5px">
                <img
                  src="pics\icons8-mail-24.png"
                  alt="phone pic"
                  style="width: 24px; height: 24px"
                />
                <span>hila9il@gmail.com</span>
              </span>
            </span>   
            </div> 
            </div>     
</div>
          <input class="search-bar" id="search-bar" oninput="searchFunction()" type="text" placeholder="חפש/י">
          <div id="search-results" class="search-results"></div>
      </div>
      <!-- body - text and button -->
      <div class="text">
      <h1 class="website-header">המדריך לסטרטאפיסט הצבאי</h1>
      <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.
      </p>
      <button class="to-arsenal-button" onclick="document.location='toolArsenalPage.html'">לארסנל</button>
      </div>
    </div>
   

    <!-- 2st screen -->
    <div class="screen2">
        <div id="tileContainer" class="scroller"></div>
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <script src="read_story_csv.js"></script>

        <img class="left" src="pics\next_icon.png" onclick="leftScroll()">
        <img class="right" src="pics\next_icon.png" onclick="rightScroll()">
        

      <div class="people-container">
        <h3 style="width: 100%; text-align: center; margin-bottom: 2vw;">רמדי חדשנות</h3>  
        <div class="first-row">
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
        </div>
        <div class="second-row">
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
        </div>
        <div class="third-row">
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
          <div class="img-container">
            <img class="img" src="pics\rmtcl.jpg">
              <p class="person-name">רא"ל הרצי הלוי</p>
              <p class="person-job">ראש המטה הכללי</p>
          </div>
        </div>
      </div>      

     </div> 

     <div class="screen3">
      <div class="rect-background">
        <div class="question-container">
        </div>
        <div>
          <img class="hi-pic" src="pics\Baymax-hi.webp">
        </div>
        <span>
          <h2 class="questioner-header">אתם לא יודעים מאיפה להתחיל?</h2>
          <p class="questioner-per">
            קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק.
            תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג -
            ולתיעם גדדיש
          </p>
        </span>
      </div>
     
      <!-- cards -->
      <div class="cards-container">
          <div class="card-rect">
            <h3 class="article-header">תבניות שימושיות</h3>
            <p>
              מגוון תבניות מוכנות לשימוש במספר תחומים ופורמטים: מצגות, לו”זים, מסמכים וגרפיקות לדוגמה כדי להקל על עבודת החדשנות ולקדם אותה. וכדי לשתף את הידע שנצבר בגופים השונים.
            </p>
          </div>
          <div class="card-rect">
            <h3>ארסנל כלים</h3>
            <p>
              אוסף כלים, מודלים ושיטות מוכחות ואפקטיביות לקידום ויישום חדשנות. ממויינים ומסווגים המונגשים באופן אינטקראקטיבי וכוללים הסברים,  ותבניות למילוי ולשימוש עצמי. 
            </p>
          </div>
          <div class="card-rect">
            <h3>כתבות</h3>
            <p>
              יוזקייסים, סיכומים וטיפים קצרים שימושיים ומעניינים שמאפשרים ללמוד ולהכיר את עולם החדשנות, דוגמאות שמציגות איך החדשנות מייושמת בצה”ל ובארגונים אחרים. וסיפורים מעוררי השראה.
            </p>
          </div>
      </div>

        <h3 class="events-header" style="width: 100%; text-align: center;">הזדמנויות חדשנות קרובות</h3>
        <div id="event-rect-container"></div>
     </div>
     <script>
            window.addEventListener("DOMContentLoaded",()=>{
              createQuestions(0)
            })
          </script>

  </body>

  </html>