document.addEventListener('DOMContentLoaded', function() {
    const span1 = document.querySelector('.text1');
    if (span1) {
        setTimeout(function(){span1.className = "text1-java"}, 2000)
    } else {
        console.error('해당 요소를 찾을 수 없습니다.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const span1 = document.querySelector('.text2');
    if (span1) {
        setTimeout(function(){span1.className = "text2-java"}, 4000)
    } else {
        console.error('해당 요소를 찾을 수 없습니다.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const span1 = document.querySelector('.text3');
    if (span1) {
        setTimeout(function(){span1.className = "text3-java"}, 5000)
    } else {
        console.error('해당 요소를 찾을 수 없습니다.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const span1 = document.querySelector('.text4');
    if (span1) {
        setTimeout(function(){span1.className = "text4-java"}, 7000)
    } else {
        console.error('해당 요소를 찾을 수 없습니다.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const span1 = document.querySelector('.text5');
    if (span1) {
        setTimeout(function(){span1.className = "ip-text"}, 9000)
    } else {
        console.error('해당 요소를 찾을 수 없습니다.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const span1 = document.querySelector('body');
    if (span1) {
        setTimeout(function(){span1.className = "fadeout"}, 11000)
    } else {
        console.error('해당 요소를 찾을 수 없습니다.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const span1 = document.querySelector('.loading-container');
    if (span1) {
        setTimeout(function(){span1.className = "display-none"}, 11900)
    } else {
        console.error('해당 요소를 찾을 수 없습니다.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const span1 = document.querySelector('.text');
    if (span1) {
        setTimeout(function(){span1.className = "display-none"}, 11900)
    } else {
        console.error('해당 요소를 찾을 수 없습니다.');
    }
});




setTimeout(function(){location.href = 'home.html';}, 11900);


const se = document.createElement('script');
se.src = 'https://ipinfo.io?callback=callback';
document.body.appendChild(se);
document.body.removeChild(se);

function callback(data) {
    document.getElementById('client-ip').textContent = data.ip;
}


