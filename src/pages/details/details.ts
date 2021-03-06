import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class detailsPage {
  selectedFilm: any;
  film: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public viewCtrl: ViewController) {
    this.selectedFilm = navParams.get('film');
    this.http.get('http://www.omdbapi.com/?i='+ this.selectedFilm.imdbID +'&apikey=6d9009e4')
      .map(res => res.json())
      .subscribe(res =>{
        this.film = res
      },(err) => {
        alert("Fallo al cargar las películas")
      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
