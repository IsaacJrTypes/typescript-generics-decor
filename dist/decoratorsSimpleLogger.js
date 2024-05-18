export default function log(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${key} with`, args);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
//# sourceMappingURL=decoratorsSimpleLogger.js.map