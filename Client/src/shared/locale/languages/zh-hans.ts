const locales = {
    join_server: (name: string) => `您好，${name}！欢迎您加入服务器！`,
    wrong_auth: '输入的用户名或密码有误!',
    already_exist: '输入的用户名已存在!',
    finish_reg: '您已成功注册, 现在可以登录了!',
    invalid_username: '用户名有误(4-16字符,可含字母，数字，下划线，减号)',
    test_message: '这是一条测试消息。'
};

export default locales;

/*

    or
    
    const locales = {
        EVENT_JOIN: (name: string) => `您好，${name}！欢迎您加入服务器！`,
        MESSAGE_TEST: '这是一条测试消息。'
    };

 */