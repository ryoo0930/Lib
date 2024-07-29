const se = document.createElement('script');
se.src = 'https://ipinfo.io?callback=callback';
document.body.appendChild(se);

// 콜백 함수 정의
function callback(data) {
     const elements = document.querySelectorAll('.client-ip');
    elements.forEach((element) => {
        element.textContent = data.ip;
    });
}

// 스크립트를 제거하기 위해 콜백 함수가 실행된 후에 실행될 수 있도록 설정
se.onload = () => {
    document.body.removeChild(se);
};

document.getElementById('sendButton').addEventListener('click', function() {
    const input = document.getElementById('messageInput');
        const newText = input.value;

        if (newText) {
            const newDiv = document.createElement('div');
            newDiv.className = 'inputCHAT';
            newDiv.textContent = newText;
            document.querySelector('.input-chat-area').appendChild(newDiv);
        }
});

document.getElementById('messageInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('messageInput');
        const newText = input.value;

        if (newText) {
            const newDiv = document.createElement('div');
            newDiv.className = 'inputCHAT';
            newDiv.textContent = newText;
            document.querySelector('.input-chat-area').appendChild(newDiv);
        }
    }
});


