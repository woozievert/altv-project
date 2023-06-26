import DEV_MODE from "../config";
import * as logger from "../log/logger";

export function withLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
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