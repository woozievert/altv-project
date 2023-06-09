import * as alt from "alt-client"
import * as logger from "../../log/logger";
// import clientLang from "./lang";

/*
    let filePath = '/Client/locales/zh_hans.json';
    if (clientLang == 'zh-CN') filePath = '/Client/locales/zh_hans.json';
    else filePath = '/Client/locales/zh_hant.json';
*/

const hans_filePath = '/Client/locales/zh_hans.json';
const hant_filePath = '/Client/locales/zh_hans.json';

const isFileExist = alt.File.exists(hans_filePath);
export let langPack = JSON.parse(alt.File.read(hans_filePath));
if (isFileExist) langPack = JSON.parse(alt.File.read(hans_filePath));

logger.debug(JSON.stringify(langPack));

// logger.debug(langPack['server.connect']);

function LangPack(lang: string) {
    if (lang == 'zh-CN') {
        if (alt.File.exists(hans_filePath)) {
            console.log('/Client/locales/zh_hans.json : true');
            logger.debug(JSON.parse(langPack));
        }
    }
}