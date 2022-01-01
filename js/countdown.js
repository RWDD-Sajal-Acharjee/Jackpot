    // var year = document.getElementById('year');
    var days = document.getElementById('days');
    var hours = document.getElementById('hours');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');

    var currentYear =new Date().getFullYear();
    var nextYear = new Date(`Jan 1 ${currentYear+1} 00:00:00`);
    function countDown(){

        var currentTime =new Date();
        var diff = nextYear-currentTime;

        var S = Math.floor((diff/1000)%60);
        second.innerHTML =( S<10 ) ? "0"+ S : S;

        var M = Math.floor((diff/1000/60)%60);
        minute.innerHTML =( M<10 ) ? "0" + M : M;

        var H = Math.floor((diff/1000/60/60) % 24);
        hours.innerHTML =( H<10 ) ? "0" + H : H;

        var D = Math.floor((diff/1000/60/60) / 24);
        days.innerHTML = D;

    }
    setInterval(countDown, 1000);