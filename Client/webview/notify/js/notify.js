var html_dev = false;
let who_in_window = 'alt';

const notifyBlock = document.querySelector(".notify-block");
const audio = document.querySelector('#notify-sound');

document.addEventListener('DOMContentLoaded', (event) => {
    if (html_dev) who_in_window = 'html_dev';
    if (`${who_in_window}` in window) {
        alt.on('notify:webview:send', _sendNotify);
    }
});

function _sendNotify(type, title, text) {
    let typeClass = getTypeClass(type);
    let loadingColor = getLoadingColor(type);
    if (typeClass && typeClass !== 'none' && loadingColor && loadingColor !== 'none') {
        const newNotify = document.createElement("div");
        newNotify.className = 'notify';
        notifyBlock.appendChild(newNotify);

        const loadingNotify = document.createElement("div");
        loadingNotify.className = 'loading ' + loadingColor;
        newNotify.appendChild(loadingNotify);
        loadingNotify.style.width = '0%';
        let loadWidth = 0;
        const loadSpeed = 1000;
        const loadSpeedTick = loadSpeed / 100;
        let loadTick = setInterval(startLoading, 1, loadingNotify);

        function startLoading(element) {
            if (loadWidth >= loadSpeed) {
                clearInterval(loadTick);
                newNotify.addEventListener("animationend", function() {
                    notifyBlock.removeChild(this);
                });
            }
            else {
                if (loadWidth === 100) audio.play();
                ++loadWidth;
                element.style.width = loadWidth / loadSpeedTick + '%';
            }
        }

        const typeNotify = document.createElement("div");
        typeNotify.className = typeClass + ' icon';
        newNotify.appendChild(typeNotify);

        const boxNotify = document.createElement("div");
        boxNotify.className = 'notify-box';
        newNotify.appendChild(boxNotify);

        const titleNotify = document.createElement("div");
        const textNotify = document.createElement("div");
        titleNotify.className = 'notify-title';
        titleNotify.textContent = title.toString();
        textNotify.className = 'notify-text';
        textNotify.textContent = text.toString();

        boxNotify.appendChild(titleNotify);
        boxNotify.appendChild(textNotify);
    }
}

function getTypeClass(type) {
    switch (type) {
        case 'info': return 'info-icon';
        case 'good': return 'good-icon';
        case 'error': return 'error-icon';
        default: return 'none';
    }
}

function getLoadingColor(type) {
    switch (type) {
        case 'info': return 'yellow';
        case 'good': return 'green';
        case 'error': return 'red';
        default: return 'none';
    }
}
