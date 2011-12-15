window.onload = function() {
    var nav = document.getElementById('nav_container');
    var distance = nav.offsetTop;
    var docked = false;
    var h1s = document.querySelectorAll("div#content h1 a");
    var navlinks = document.querySelectorAll("div#nav a");
    var headinglocations = new Array(h1s.length - 1);
    var scroll_location = 0;
    var closestheading = 0;

    function scroll_position() {
        return document.body.scrollTop || document.documentElement.scrollTop;
    }

    for (var i = 0; i < h1s.length; i++) {
        headinglocations[i] = h1s[i].offsetTop;
    }

    function check_location() {
        for (var i = 0; i < h1s.length; i++) {
            if (h1s[(i+1)] != undefined){
                if ((scroll_location > headinglocations[i]) && (scroll_location < headinglocations[(i + 1)])){
                    closestheading = h1s[i];
                }
                else if (scroll_location < headinglocations[0]){
                    closestheading = 0;
                }
            }
            else if (scroll_location > headinglocations[i]){
                closestheading = h1s[i];
            }
        }
        update_nav();
    }

    function update_nav() {
        for (var i = 0; i < navlinks.length; i++) {
            if (closestheading.href == navlinks[i].href){
                navlinks[i].style.textDecoration = "underline";
            }
            else {
                navlinks[i].style.textDecoration = "none";
            }
        }
    }

    window.onscroll = function () {
        if (!docked && (distance - scroll_position() <= 0)) {
            nav.style.top = 0;
            nav.style.position = 'fixed';
            docked = true;
        }
        else if (docked && scroll_position() <= distance) {
            nav.style.position = 'absolute';
            nav.style.top = distance + 'px';
            docked = false;
        }
        scroll_location = (scroll_position() + 60);
        check_location();
    }

    prettyPrint();
}

