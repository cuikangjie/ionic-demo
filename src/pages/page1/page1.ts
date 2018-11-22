import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";


@IonicPage({
  name: 'page1',
  segment: 'page1/:id'
})
@Component({
  selector: 'page-page1',
  templateUrl: "page1.html"
})
export class Page1 {
  constructor(public navCtrl: NavController) {}

  pushPage(detailInfo) {

  }
}
