import { Component, OnInit } from '@angular/core';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {SystemService} from '../../shared/system.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(public systemService: SystemService) { }

  ngOnInit() {

  }


  
}


const formations = [ 
  {
    id : 1,
    type : "ada",
    title : "Formation d’animateur à l’atelier citoyenneté",
    description : "Jour 1 : méthodologie de base d’animation de groupe",
    durée : "3h30",
    accessibilité : "Salarié/volontaire qui donne les ateliers citoyenneté dans les centres d’accueil des DPI",
    Prix : "Gratuit",
    contact : "Suley Velaj – suley.velaj@croix-rouge.be"
},
]

