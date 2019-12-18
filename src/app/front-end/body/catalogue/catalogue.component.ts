import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  
}

const ada = {
  id : 1, 
  title : "Formation d’animateur à l’atelier citoyenneté",
  description : "Jour 1 : méthodologie de base d’animation de groupe",
  durée : "3h30",
  accessibilité : "Salarié/volontaire qui donne les ateliers citoyenneté dans les centres d’accueil des DPI",
  Prix : "Gratuit",
  Contact : "Suley Velaj – suley.velaj@croix-rouge.be"
};