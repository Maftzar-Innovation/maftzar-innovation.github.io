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