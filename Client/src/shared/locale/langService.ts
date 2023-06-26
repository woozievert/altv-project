import {isFileExist, locales, playerLang} from "./readJson";

export default function langPack(lang: string): string {
    if (playerLang == 'zh-CN')
        if (isFileExist)
            if (locales[lang]) return locales[lang];
            else return '无效语法';
        else return '语言文件不存在';
    else return '输入字符串无效';
}