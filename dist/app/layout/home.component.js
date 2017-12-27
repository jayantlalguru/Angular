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
const router_1 = require("@angular/router");
let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        this.customer = "Customer data fetched from service and loaded inside a grid. You can also add & update customers. The grid is dyanamic and can be used in any component. Click To Check";
        this.twoway = "2 way Data Binding. Write/delete/edit in one textbox and see it in the other and vice versa. Click To Check";
        this.sharing = "Sharing data between 2 components by the help of service. Type/edit/delete in any one textbox, it will reflect to the other. Click To Check";
        this.attribute = "Attribute directive to underline any text. Click To Check";
        this.structural = "Structural directive to create element based on the value passed. Click To Check";
        this.todo = "Add To do items and never forget to complete your task. Create todos and mark them completed when done. You can also see the completed task. Click To Check";
    }
    Navigate(value) {
        switch (value) {
            case "Twoway": {
                this.router.navigate(['Twoway']);
                break;
            }
            case "Customer": {
                this.router.navigate(['Customer']);
                break;
            }
            case "Sharing": {
                this.router.navigate(['Sharing']);
                break;
            }
            case "Attribute": {
                this.router.navigate(['Attribute']);
                break;
            }
            case "Structural": {
                this.router.navigate(['Structural']);
                break;
            }
            case "Todo": {
                this.router.navigate(['Todo']);
                break;
            }
        }
    }
};
HomeComponent = __decorate([
    core_1.Component({
        templateUrl: './src/app/layout/home.html',
        styleUrls: ['./src/app/css/home.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map