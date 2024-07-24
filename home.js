

const se = document.createElement('script');
se.src = 'https://ipinfo.io?callback=callback';
document.body.appendChild(se);
document.body.removeChild(se);

function callback(data) {
    document.getElementById('client-ip').textContent = data.ip;
}