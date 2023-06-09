import * as alt from "alt-client"
import * as langPack from './languages/zh-Hans.json' assert { type: 'json' }

alt.log(langPack["login.wrong_pass"]);
console.log(langPack["login.wrong_pass"]);

// const path = './languages/';
//
// interface languageType {
//     [key: string]: string;
// }
//
// function getTranslation(file: alt.File, language: string): languageType {
//     if (file.exists )
//     const translation = JSON.parse(fileContent);
//     return translation;
// }

// export default getTranslation;