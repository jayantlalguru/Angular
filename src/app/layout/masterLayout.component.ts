import { Component, style } from "@angular/core";
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
@Component({
    selector: 'app-main',
    templateUrl: './src/app/layout/masterLayout.html',
    styleUrls: ['./src/app/css/layout.css', './src/app/css/sidebarLeft.css'],
    providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class MasterLayoutComponent{
    constructor(private _location: Location){        
    }    
    Navigate(){
        this._location.back();
    }
}