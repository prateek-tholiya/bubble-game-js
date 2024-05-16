function makebubble() {
    var clutter = " ";

    for (var i = 1; i <= 102; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div id="bubble">${rn}</div>`;
    }

    document.querySelector("#panelbottom").innerHTML = clutter;
}

var timer = 60;

function runTimmer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(".timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#panelbottom").innerHTML = `<h1>Game Over</h1>`;
        }

    }, 1000);
}

var hitrn = 0;

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector(".hitval").textContent = hitrn ;
}

var score = 0;

function increaseScore() {
    score += 10;
    document.querySelector(".scoreval").textContent = score;
}

document.querySelector("#panelbottom").addEventListener("click", function (dets) {
    var clickednum =  (Number(dets.target.textContent));
    if(clickednum === hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }
})

runTimmer();
makebubble();
getNewHit();