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
let UnderlineDirective = class UnderlineDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    onMouseEnter() {
        this.hover(true);
    }
    onMouseLeave() {
        this.hover(false);
    }
    hover(shouldUnderline) {
        if (shouldUnderline) {
            // Mouse enter   
            this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
        }
        else {
            // Mouse leave           
            this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');
        }
    }
};
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UnderlineDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UnderlineDirective.prototype, "onMouseLeave", null);
UnderlineDirective = __decorate([
    core_1.Directive({
        selector: '[underline]'
    }),
    __metadata("design:paramtypes", [core_1.Renderer,
        core_1.ElementRef])
], UnderlineDirective);
exports.UnderlineDirective = UnderlineDirective;
//# sourceMappingURL=underline.directive.js.map