import alt from "alt-client";

const hans_filePath = '/Client/locales/zh_hans.json';
const hant_filePath = '/Client/locales/zh_hant.json';
export let playerLang: string = 'zh-CN';

export const isFileExist = alt.File.exists(hans_filePath);
export let locales = JSON.parse(alt.File.read(hans_filePath));
if (isFileExist) locales = JSON.parse(alt.File.read(hans_filePath));