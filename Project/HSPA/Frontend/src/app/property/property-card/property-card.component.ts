import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Property } from "../../models/property";
import { IProperty } from "../IProperty.interface";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-property-card',
    // template : `<h1> I am a property card</h1>`,
    templateUrl : './property-card.component.html',
    // styles: ['h1 {font-weight: normal;}']
    styleUrls : ['./property-card.component.css'],  
    standalone: true,
    imports: [CommonModule, RouterLink]
}
)

export class PropertyCard {
// @Input() property !: Property    
@Input() property !: IProperty    

    // Property: any = {
    //     "Id":1,
    //     "Name": "Antellia",
    //     "Type":"House",
    //     "Price": 12000
    // }
}