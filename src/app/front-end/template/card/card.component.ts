import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  trainings = [
    {
        name: "Au coeur de la Croix-Rouge",
        description: "Ce module participatif et convivial te permet de situer ton action au sein du Mouvement international de la Croix-Rouge et du Croissant-Rouge, et à travers des cas pratiques, de mesurer la portée concrète des Principes fondamentaux et des valeurs humanitaires dans ton engagement volontaire."
        + "\n" + "Le module vise également à mieux comprendre l’organisation et le fonctionnement de la Croix-Rouge de Belgique, ses activités, l’organisation du volontariat, etc. notamment à travers les échanges avec d’autres volontaires issu·es d’activités et d’entités variées.",
        picto_url:"././././assets/img/pictos/pour-tous-3.png",
        image_url:"././././assets/img/illustrations/formation-au-coeur-crb.png",
      },

    {
        name: 'Clean Code'
    }
];



}
