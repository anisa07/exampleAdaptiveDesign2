(function () {
    
    var imgClicked = document.getElementById("imgSector").children;
    var AddEvent = {
        addHandler: function (element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        }
    }

    var imageClick = function(e){
        var bgImage = document.getElementById("bgImage");
        var currentImageUrl = window.getComputedStyle(bgImage).backgroundImage.replace("\"\)", "").replace("url\(\"", "");
        var buf = e.target.src;
        e.target.src = currentImageUrl;
        bgImage.style.backgroundImage = "url("+buf+")";
    }
    
    imgClicked.forEach = [].forEach;
    
    imgClicked.forEach(function(element){
        AddEvent.addHandler(element, "click", imageClick);
    })



})();