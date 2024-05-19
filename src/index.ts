import {log,simpleLogger,readOnly} from './decoratorsSimpleLogger.js';

@simpleLogger
class MyTestClass {
    public fridge: string[];
    public freezer: string[];
    private _groceryList: string[];

    constructor(fridge: string[], freezer: string[],groceryList:string[]) {
        this.fridge = fridge;
        this.freezer = freezer;
        this._groceryList = groceryList
    }
    @log
    addFridge(item: string) {
        this.fridge.push(item);
    }
    @log
    addFreezer(item: string) {
        this.freezer.push(item);
    }
    @readOnly
    get groceryList() : string[] {
       return this._groceryList
    }
}

const appliance = new MyTestClass([], [],['nuts','milk','cat treats']);
appliance.addFridge("meat");
appliance.addFridge("cake");
appliance.addFreezer("peas");
appliance.addFreezer("ice cream");
try {
    appliance.groceryList[0] = "pork belly"
    console.log(appliance.groceryList)
} catch(e) {
    console.error(e)
}
console.log(appliance.groceryList)