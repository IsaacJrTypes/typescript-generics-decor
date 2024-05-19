var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { log, simpleLogger, readOnly } from './decoratorsSimpleLogger.js';
let MyTestClass = class MyTestClass {
    constructor(fridge, freezer, groceryList) {
        this.fridge = fridge;
        this.freezer = freezer;
        this._groceryList = groceryList;
    }
    addFridge(item) {
        this.fridge.push(item);
    }
    addFreezer(item) {
        this.freezer.push(item);
    }
    get groceryList() {
        return this._groceryList;
    }
};
__decorate([
    log,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyTestClass.prototype, "addFridge", null);
__decorate([
    log,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyTestClass.prototype, "addFreezer", null);
__decorate([
    readOnly,
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], MyTestClass.prototype, "groceryList", null);
MyTestClass = __decorate([
    simpleLogger,
    __metadata("design:paramtypes", [Array, Array, Array])
], MyTestClass);
const appliance = new MyTestClass([], [], ['nuts', 'milk', 'cat treats']);
appliance.addFridge("meat");
appliance.addFridge("cake");
appliance.addFreezer("peas");
appliance.addFreezer("ice cream");
try {
    appliance.groceryList[0] = "pork belly";
    console.log(appliance.groceryList);
}
catch (e) {
    console.error(e);
}
console.log(appliance.groceryList);
//# sourceMappingURL=index.js.map