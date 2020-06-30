import { Component} from "@angular/core";
import { ObservableArray, Observable, Utils } from "tns-core-modules";
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent extends Observable {
    items = new ObservableArray<Item>();

    constructor(private itemService: ItemService) { 
        super();
    }

    ngOnInit() {
        this.loadInformation();
    }

    loadInformation() {
        this.itemService.watchItems((Response: Item[]) => {
            this.items.splice(0, this.items.length);
            this.items.push(Response);  
        })
    } 

    click() {
        Utils.openUrl('https://www.juanvaldezcafe.com/sites/default/files/pdf/ESTADOS-FINANCIEROS-INDIVIDUALES.pdf');
    } 

}
