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
        setTimeout(function(){span1.className = "text2-java"}, 6000)
    } else {
        console.error('해당 요소를 찾을 수 없습니다.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const span1 = document.querySelector('.text3');
    if (span1) {
        setTimeout(function(){span1.className = "text3-java"}, 12000)
    } else {
        console.error('해당 요소를 찾을 수 없습니다.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const span1 = document.querySelector('.text4');
    if (span1) {
        setTimeout(function(){span1.className = "text4-java"}, 16000)
    } else {
        console.error('해당 요소를 찾을 수 없습니다.');
    }
});