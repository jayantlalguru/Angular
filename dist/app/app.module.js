"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const platform_browser_1 = require("@angular/platform-browser");
const customer_component_1 = require("./components/customer/customer.component");
const grid_Component_1 = require("./partialViews/grid.Component");
const masterLayout_component_1 = require("./layout/masterLayout.component");
const home_component_1 = require("./layout/home.component");
const router_1 = require("@angular/router");
const routing_1 = require("./layout/routing");
const customer_service_1 = require("./services/customer/customer.service");
const sharing_service_1 = require("./services/sharing/sharing.service");
const one_component_1 = require("./components/sharing/one.component");
const two_component_1 = require("./components/sharing/two.component");
const shared_module_1 = require("./sharedmodule/shared.module");
const structural_component_1 = require("./components/directives/structural.component");
const attribute_component_1 = require("./components/directives/attribute.component");
const twoWay_Component_1 = require("./components/sharing/twoWay.Component");
const todo_component_1 = require("./components/todo/todo.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routing_1.ApplicationRoutes),
            platform_browser_1.BrowserModule, forms_1.FormsModule, shared_module_1.SharedModule
        ],
        declarations: [
            customer_component_1.CustomerComponent,
            grid_Component_1.GridComponent,
            masterLayout_component_1.MasterLayoutComponent,
            home_component_1.HomeComponent,
            one_component_1.OneComponent,
            two_component_1.TwoComponent,
            structural_component_1.StructuralComponent,
            attribute_component_1.AttributeComponent,
            twoWay_Component_1.TwoWayComponent,
            todo_component_1.TodoComponent
        ],
        providers: [
            customer_service_1.CustomerService,
            sharing_service_1.SharingService
        ],
        bootstrap: [masterLayout_component_1.MasterLayoutComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map