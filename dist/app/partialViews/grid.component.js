"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let GridComponent = class GridComponent {
    constructor() {
        //data to bind in the grid
        this.gridData = new Array();
        //column name collection
        this.gridColumns = new Array();
        this.selected = new core_1.EventEmitter();
        //Header
        this.header = "";
    }
    set setGridData(dataObject) {
        if (dataObject.length > 0) {
            var columnNames = Object.keys(dataObject[0]);
            this.gridColumns = new Array();
            for (var index in columnNames) {
                this.gridColumns.push(columnNames[index]);
            }
            this.gridData = dataObject;
        }
    }
    Select(_selected) {
        this.selected.emit(_selected);
    }
};
__decorate([
    core_1.Output("grid-selected"),
    __metadata("design:type", core_1.EventEmitter)
], GridComponent.prototype, "selected", void 0);
__decorate([
    core_1.Input("grid-header"),
    __metadata("design:type", String)
], GridComponent.prototype, "header", void 0);
__decorate([
    core_1.Input("grid-data"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GridComponent.prototype, "setGridData", null);
GridComponent = __decorate([
    core_1.Component({
        selector: 'grid-display',
        templateUrl: './src/app/partialViews/grid.html'
    })
], GridComponent);
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.Component.js.map