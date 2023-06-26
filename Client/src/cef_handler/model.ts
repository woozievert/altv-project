import alt from "alt-client";
import DEV_MODE from "../config";
import * as logger from "../log/logger";

export default class webView {

    private view: alt.WebView | undefined;
    private readonly url: string;
    private readonly name: string;
    private readonly focusable: boolean;
    private readonly cursorable: boolean;
    private readonly controlable: boolean;
    private active_state: boolean;
    private focus_state: boolean;
    constructor(name: string, url: string, focus: boolean, cursor: boolean, control: boolean) {
        this.url = url;
        this.name = name;
        this.focusable = focus;
        this.cursorable = cursor;
        this.controlable = control;
        this.active_state = false;
        this.focus_state = false;
    }
    get page () {
        return this.view
    }

    get active (){
        return this.active_state;
    }

    @withLogging
    async show(): Promise<boolean> {
        if (!this.view) return false;
        this.view = new alt.WebView(this.url);
        await this.focus();
        await this.cursor(this.cursorable);
        await this.gameControl(this.controlable);
        this.active_state = true;
        return true;
    }

    @withLogging
    async focus(): Promise<boolean> {
        if (!this.view) return false;
        if (!this.focusable) return false;
        this.focus_state = true;
        this.view.focus();
        return true;
    }
    @withLogging
    async unfocus(): Promise<boolean> {
        if (!this.view) return false;
        this.focus_state = false;
        this.view.unfocus();
        return true;
    }
    @withLogging
    async destroy(isPageDestroy: boolean): Promise<boolean> {
        if (!this.view) return false;
        if (!isPageDestroy) return false;
        this.view.unfocus();
        this.view.destroy();
        this.active_state = false;
        return true;
    }

    @withLogging
    async cursor(state: boolean): Promise<boolean> {
        if (!this.view) return false;
        if (!this.cursorable) return false;
        alt.showCursor(state);
        return true;
    }

    @withLogging
    async gameControl(state: boolean): Promise<boolean> {
        if (!this.view) return false;
        if (!this.controlable) return false;
        alt.toggleGameControls(state);
        return true;
    }
}

function withLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if (!DEV_MODE) return;
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
        const className = target.constructor.name;
        const debugMsg = `类: ${className} 的方法: ${propertyKey} 被调用`;
        logger.debug(debugMsg);

        const result = await originalMethod.apply(this, args);

        const debugMsg2 = `类: ${className} 的方法: ${propertyKey} 执行完毕，结果: ${JSON.stringify(result)}`;
        logger.debug(debugMsg2);

        return result;
    };

    return descriptor;
}


