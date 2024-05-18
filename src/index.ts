import log from './decoratorsSimpleLogger.js';

class MyTestClass {
    public fridge: string[];
    public freezer: string[];

    constructor(fridge: string[], freezer: string[]) {
        this.fridge = fridge;
        this.freezer = freezer;
    }
    @log
    addFridge(item: string) {
        this.fridge.push(item);
    }
    @log
    addFreezer(item: string) {
        this.freezer.push(item);
    }
}

const appliance = new MyTestClass([], []);
appliance.addFridge("meat");
appliance.addFreezer("peas");
