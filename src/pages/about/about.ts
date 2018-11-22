import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  constructor(public navCtrl: NavController) {
    console.log(navCtrl);
    this.navCtrl = navCtrl;
  }

  title = "test message";

  toPage() {
    this.navCtrl.push("page1", {
      id: 2
    });
  }
}
