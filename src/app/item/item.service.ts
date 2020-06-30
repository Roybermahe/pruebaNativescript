import { Injectable } from "@angular/core";
import { Item } from "./item";
import { firestore } from "nativescript-plugin-firebase/firebase";
import * as firebase from "nativescript-plugin-firebase/app";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    docRef: firestore.DocumentReference;
    constructor() {
        this.docRef = firebase.firestore().collection("jugadores").doc("informacion");
    }

    watchItems(callback: Function) {
        this.docRef.onSnapshot((snap: firestore.DocumentSnapshot) => {
            callback(<Item[]>snap.data().data);
        }, error => callback(error));
    }
}
