import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {
  constructor(public http: HttpClient, public plt: Platform) {
    console.log("Hello CommonProvider Provider");
    this.plt = plt;
    plt.ready().then(() => {});
  }
}
