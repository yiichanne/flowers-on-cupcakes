//Allow redirect back to previous page via manual/automatic countdown

var linkback = document.getElementById("linkback");
//Provide a standard href to facilitate standard browser features: hover to see link, open link in new tab etc
//For navigation within local filesystem, document.referrer not available (will only see and go to thankyou.html)
linkback.setAttribute('href', document.referrer);

//To enable navigation within local filesystem:
linkback.onclick = function () {
    history.back();
    return false;
}

//To redirect automatically
var count = 5;
function countDown() {
    var timer = document.getElementById("timer");
    if (count > 0) { //When count is still positive
        count--; //Minus count
        timer.innerHTML = "This page will redirect in " + count + " seconds.";
        setTimeout("countDown()", count * 1000); //Redirect in count number of seconds
    } else { //Once count reach 0, go to previous page
        history.back();
    }
}
countDown();

