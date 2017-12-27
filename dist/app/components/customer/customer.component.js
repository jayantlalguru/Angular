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
const customer_model_1 = require("../../models/customer/customer.model");
const customer_service_1 = require("../../services/customer/customer.service");
let CustomerComponent = class CustomerComponent {
    constructor(customerService) {
        this.customerService = customerService;
        //binding logic
        this.currentCustomer = new customer_model_1.CustomerModel();
        //customer collection
        this.customers = new Array();
        this.customers = customerService.InitialCustomerList();
    }
    Add() {
        if (this.currentCustomer.customerCode != '' && this.currentCustomer.customerName != '') {
            this.customers.push(this.currentCustomer);
            this.customers = this.customers.slice();
            this.currentCustomer = new customer_model_1.CustomerModel();
        }
    }
    Select(customer) {
        this.currentCustomer = Object.assign({}, customer);
    }
    Update() {
        /*var updatedCustomer = this.customers.find(c=>c.customerCode == this.currentCustomer.customerCode)
        updatedCustomer.customerName = this.currentCustomer.customerName;
        updatedCustomer.customerAmount = this.currentCustomer.customerAmount;*/
        for (let customer of this.customers) {
            if (customer.customerCode == this.currentCustomer.customerCode) {
                customer.customerName = this.currentCustomer.customerName;
                customer.customerAmount = this.currentCustomer.customerAmount;
            }
        }
        this.currentCustomer = new customer_model_1.CustomerModel();
    }
    Cancel() {
        this.currentCustomer = new customer_model_1.CustomerModel();
    }
};
CustomerComponent = __decorate([
    core_1.Component({
        templateUrl: './src/app/views/customer/customer.html'
    }),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map