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
const sharing_service_1 = require("../../services/sharing/sharing.service");
let OneComponent = class OneComponent {
    constructor(sharingService) {
        this.sharingService = sharingService;
    }
    ngOnInit() {
        this.sharingService.cast.subscribe(u => this.userName = u);
    }
    valueChange() {
        this.sharingService.getData(this.userName);
    }
};
OneComponent = __decorate([
    core_1.Component({
        templateUrl: './src/app/views/sharing/one.html'
    }),
    __metadata("design:paramtypes", [sharing_service_1.SharingService])
], OneComponent);
exports.OneComponent = OneComponent;
//# sourceMappingURL=one.component.js.map