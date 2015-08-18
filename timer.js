function countdown(seconds, callback) {
    var intervalID = null;
    
    function format(s) {
        callback(Math.floor(s / 60) + ":" + (s % 60));
    }

    return function() {
        if(intervalID != null) {
            return;
        }
        intervalID = setInterval(function () {
            if (seconds <= 0) {
                clearInterval(intervalID);
                intervalID = null;
            }
            format(seconds--);
        }, 1000);
        
        format(seconds--);
    };
}

function addElements() {
    var container = document.getElementById('container');
    var div = document.createElement("div");
    div.setAttribute("class", "countdown");
    container.appendChild(div);
    div.addEventListener('click', function() {
        container.removeChild(div);
    });
    return div;
}

function addCountdown() {
    var minutes = parseInt(document.getElementById("in").value);
    var seconds = minutes * 60;
    if (minutes <= 0) {
        alert("Value must be > 0!!!");
        return;
    }

    var el = addElements();
    countdown(seconds, function(r) {//calling to countdown and setting the timer
        el.innerHTML = r;
    })();
}

//addCountdown();
