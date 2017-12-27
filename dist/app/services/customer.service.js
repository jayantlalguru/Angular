"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const customer_model_1 = require("../models/customer/customer.model");
let CustomerService = class CustomerService {
    constructor() {
        this.customers = new Array();
        this.customer = new customer_model_1.CustomerModel();
    }
    //Create data from customer page load
    InitialCustomerList() {
        for (let index = 0; index < 11; index++) {
            this.customer.customerAmount = 400 + index;
            this.customer.customerCode = "A" + "9004" + index;
            this.customer.customerName = "Customer" + index;
            this.customers.push(this.customer);
            this.customer = new customer_model_1.CustomerModel();
        }
        return this.customers;
    }
};
CustomerService = __decorate([
    core_1.Injectable()
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map