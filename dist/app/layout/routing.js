"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_component_1 = require("../../app/components/customer/customer.component");
const home_component_1 = require("./home.component");
const one_component_1 = require("../components/sharing/one.component");
const structural_component_1 = require("../components/directives/structural.component");
const attribute_component_1 = require("../components/directives/attribute.component");
const twoWay_Component_1 = require("../components/sharing/twoWay.Component");
const todo_component_1 = require("../components/todo/todo.component");
exports.ApplicationRoutes = [
    { path: 'Home', component: home_component_1.HomeComponent },
    { path: 'Customer', component: customer_component_1.CustomerComponent },
    { path: 'Sharing', component: one_component_1.OneComponent },
    { path: 'Attribute', component: attribute_component_1.AttributeComponent },
    { path: 'Structural', component: structural_component_1.StructuralComponent },
    { path: 'Twoway', component: twoWay_Component_1.TwoWayComponent },
    { path: 'Todo', component: todo_component_1.TodoComponent },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];
//# sourceMappingURL=routing.js.map