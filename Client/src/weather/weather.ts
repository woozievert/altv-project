import alt from 'alt-client';
import native from 'natives';
let lastWeather = 'CLEAR';
let currentWeather = 'CLEAR';

alt.onServer('weather:client:weather', setServerWeather);
function setServerWeather(weather: string, time: number) {
    console.log(`收到天气${weather}`);

    currentWeather = weather;
    if(time === 0) {
        native.setWeatherTypeNowPersist(weather);
    } else {
        if(lastWeather != currentWeather) {
            let i = 0;
            let inter = alt.setInterval(() => {
                i++;
                if(i < 100) {
                    native.setWeatherTypeOvertimePersist(currentWeather, (i / 100));
                } else {
                    alt.clearInterval(inter)
                    lastWeather = currentWeather;
                }
            }, (time * 10))
        }
    }
}

alt.onServer('weather:client:time', setServerTime);
function setServerTime(hour: number, minute: number, second: number, msperminute: number) {
    console.log(`收到时间${hour}:${minute}:${second}`);

    let oldTime = {
        hour: native.getClockHours(),
        minute: native.getClockMinutes(),
        second: native.getClockSeconds()
    }
    if((minute - oldTime.minute) > 10) {
        native.setClockTime(hour, minute, second);
    }
    if(msperminute != alt.getMsPerGameMinute()) {
        alt.setMsPerGameMinute(msperminute);
    }
}