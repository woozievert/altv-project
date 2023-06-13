import * as alt from "alt-client"
const hans_filePath = '/Client/locales/zh_hans.json';
const hant_filePath = '/Client/locales/zh_hant.json';
let playerLang = 'zh-CN';

const isFileExist = alt.File.exists(hans_filePath);
let locales = JSON.parse(alt.File.read(hans_filePath));
if (isFileExist) locales = JSON.parse(alt.File.read(hans_filePath));

export default function langPack(lang: string): string {
    if (playerLang == 'zh-CN')
        if (isFileExist)
            if (locales[lang]) return locales[lang];
            else return '无效语法';
        else return '语言文件不存在';
    else return '输入字符串无效';
}