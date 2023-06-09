import hansLocale from './languages/zh-hans'; // 简体中文语言包
import hantLocale from './languages/zh-hant'; // 繁体中文语言包

interface langPack {
    [key: string]: any;
}

const langPack: langPack = {
    "zh-CN": hansLocale,
    "zh-TW": hantLocale,
};

export default langPack;

/* 示例：

*/