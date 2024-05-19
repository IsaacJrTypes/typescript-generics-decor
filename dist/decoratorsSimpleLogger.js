export function simpleLogger(constructor) {
    console.log(`class ${constructor.name} instantiated`);
}
export function log(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`calling ${key} with`, args);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
export function readOnly(target, key, descriptor) {
    const OGgetter = descriptor.get;
    descriptor.get = function () {
        if (OGgetter) {
            return Object.freeze(OGgetter.call(this));
        }
        else {
            throw new Error(`getter for ${key} not defined`);
        }
    };
}
//# sourceMappingURL=decoratorsSimpleLogger.js.map