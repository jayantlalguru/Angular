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
var core_1 = require("@angular/core");
var GridComponent = /** @class */ (function () {
    function GridComponent() {
        //data to bind in the grid
        this.gridData = new Array();
        //column name collection
        this.gridColumns = new Array();
        //Header
        this.header = "";
    }
    Object.defineProperty(GridComponent.prototype, "setGridData", {
        set: function (dataObject) {
            if (dataObject.length > 0) {
                var columnNames = Object.keys(dataObject[0]);
                for (var _i = 0, columnNames_1 = columnNames; _i < columnNames_1.length; _i++) {
                    var index = columnNames_1[_i];
                    this.gridColumns.push(columnNames[index]);
                }
                this.gridData = dataObject;
            }
        },
        enumerable: true,
        configurable: true
    });
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
            templateUrl: './src/app/Utils/grid.html'
        })
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.Component.js.map