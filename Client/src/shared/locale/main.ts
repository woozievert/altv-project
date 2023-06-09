import hansLocale from './languages/zh-hans'; // 简体中文语言包
import hantLocale from './languages/zh-hant'; // 繁体中文语言包

interface lang {
    [key: string]: any;
}

const langPack: lang = {
    "zh-CN": hansLocale,
    "zh-TW": hantLocale,
};

export default langPack;

/* 示例：

*/