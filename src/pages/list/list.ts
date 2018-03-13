import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {detailsPage} from "../details/details";

import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  films: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public http:Http, public modalCtrl: ModalController) {

    this.http.get('http://www.omdbapi.com/?s=star&apikey=6d9009e4')
      .map(res => res.json())
      .subscribe(res =>{
        this.films = res.Search
      },(err) => {
        alert("Fallo al cargar las películas")
      });

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  presentModal() {

  }

  itemTapped(event, film) {
    let modal = this.modalCtrl.create(detailsPage,{
      film:film
    });
    modal.present();
  }
}
