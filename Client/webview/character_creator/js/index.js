var html_dev = false;
let who_in_window = 'alt';

const inputName = document.getElementById('name-input');

document.addEventListener('DOMContentLoaded', async (event) => {
    if (html_dev) who_in_window = 'html_dev';
    if (`${who_in_window}` in window) {
        console.log(`创建角色页面: ${who_in_window}加载完成`);
    }
});

function submitCharacterInfo() {
    console.log(`已点击提交, 收到昵称:${inputName.value}`);
}