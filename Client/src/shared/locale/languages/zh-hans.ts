const locales = {
    join_server: (name: string) => `您好，${name}！欢迎您加入服务器！`,
    wrong_auth: '输入的用户名或密码有误!',
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