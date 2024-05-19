export function simpleLogger (constructor:Function) {
    console.log(`class ${constructor.name} instantiated`)
}

export function log(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`calling ${key} with`, args);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

export function readOnly(target: any, key: string, descriptor: PropertyDescriptor) {
    const OGgetter = descriptor.get;
    descriptor.get = function () {
    if (OGgetter) {
        return Object.freeze(OGgetter.call(this));
    } else {
        throw new Error(`getter for ${key} not defined`)
    }
    }
}