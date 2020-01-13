import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {SystemService} from '../../shared/system.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CardComponent implements OnInit {
  trainings: any;
  public sessions: any;
  public selectedTraining: any;

  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              public systemService: SystemService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content, training) {
    this.getSessions(content, training);
    /*this.modalService.open(
      content, 
      {
          size: 'xl', 
          windowClass: ''
      }
    )*/
  }

  ngOnInit() {
    this.systemService.getTrainings().subscribe(
      r => {
        console.log('test', r);
        this.systemService.trainings = r;
      },
      err => {
        console.log('Error', err)
      }
    );
  }

  getSessions(content, training){
    this.systemService.getSessions(training.training_id).subscribe(
      r => {
        this.sessions = r;
        console.log(this.sessions);
        this.selectedTraining = training;

        /*this.sessions.map((k, v) => {
          console.log(k, v);
          const count = this.getParticipants(k.training_session_id);
          console.log('count', count);
          k.participants = count;
        });*/
        console.log(this.sessions);
        this.modalService.open(
          content,
          {
            size: 'xl',
            windowClass: ''
          }
        );
      },
      err => {

      }
    )
  }



/*  trainings = [
    {
        name: "À la rencontre de la personne bénéficiaire d’aide alimentaire",
        description: "Lors de cette formation, tu aborderas le cadre de référence de tes activités ainsi que les savoirs et pratiques utiles à ton volontariat. Nous y discuterons le contexte de l’aide alimentaire, y compris nos principaux partenaires sociaux, ainsi que la raison d’être de nos critères de fonctionnement (conditions d’accès, sources d’approvisionnement, etc.). Nous mènerons également une réflexion sur le profil et les réalités du public bénéficiaire de l’aide alimentaire afin de définir le rôle du volontaire et les clés pour la relation volontaire-bénéficiaire.",
        duration_info: "1 jour",
        price: "Gratuit",
        participants_min: 8,
        participants_max: 14,
        is_required: 0,
        conditions: "Pour les nouveaux·elles membres engagé·es dans les activités d’aide alimentaire telles que que les épiceries sociales et les distributions de colis alimentaires",
        contact_id: ["ESS", "/", "inscriptionformation@croix-rouge.be", "/"],
        category_id: "action_sociale",
        image_url:"././././assets/img/illustrations/formation-alimentation.png",
      },

    {
      name: "Au coeur de la Croix-Rouge",
      description: "Ce module participatif et convivial te permet de situer ton action au sein du Mouvement international de la Croix-Rouge et du Croissant-Rouge, et à travers des cas pratiques, de mesurer la portée concrète des Principes fondamentaux et des valeurs humanitaires dans ton engagement volontaire."
      + "\n" + "Le module vise également à mieux comprendre l’organisation et le fonctionnement de la Croix-Rouge de Belgique, ses activités, l’organisation du volontariat, etc. notamment à travers les échanges avec d’autres volontaires issu·es d’activités et d’entités variées.",
      duration_info: "3h30",
      price: "Gratuit",
      participants_min: 8,
      participants_max: 14,
      is_required: 1,
      conditions: "Pour les nouveaux·elles membres ayant confirmé·es leur désir de s’engager à la Croix-Rouge, et ce quel que soit le secteur d’activité auquel il·elles se destinent. Obligatoire dans les 6 premiers mois de l’activité.",
      contact_id: ["Les CP", "Bruxelles: 02/371.31.63, Brabant-Wallon: 010/40.08.27, Hainaut: 065/33.54.41, Liège: 04/349.90.90, Luxembourg: 063/22.10.10, Namur: 081/56.41.88", "formations.bruxelles@croix-rouge.be, coordinationformation.cpbw@croix-rouge.be, coordinationformation.cpht@croix-rouge.be, coordinationformation.cplg@croix-rouge.be, coordinationformation.cplux@croix-rouge.be, coordinationformation.cpnr@croix-rouge.be", "/"],
      category_id: "tous",
      image_url:"././././assets/img/illustrations/formation-au-coeur-crb.png",
    }
];


sessions = [
            { type: "training1_sessions",
              details: { training_id: this.trainings[0].name,
                day1: "jeudi 22 octobre 2020",
                start_time1: "9h30",
                end_time1: "16h30", 
                day2: "/",
                trainer1_id: "Mayi Mukuna",
                location_id: ["Comité provincial du Luxembourg – Formation", "Rue du Dispensaire, 1 - 6700 Arlon"],
                participants_number : 10,
                participants_max: 14
                },
          },
          { type: "training1_sessions",
            details: { training_id: this.trainings[0].name,
              day1: "jeudi 5 novembre 2020",
              start_time1: "9h30",
              end_time1: "16h30", 
              day2: "/",
              trainer1_id: "Mayi Mukuna",
              location_id: ["Maison Croix-Rouge Pays de Bastogne", "Rue des Jardins 20, 6600 Bastogne"],
              participants_number: 5,
              participants_max: 14 
            },
          },
          { type: "training1_sessions",
            details: { training_id: this.trainings[0].name,
              day1: "mardi 10 mars 2020",
              start_time1: "9h30",
              end_time1: "16h30", 
              day2: "/",
              trainer1_id: "Mayi Mukuna",
              location_id: ["Maison Croix-Rouge Charlemagne", "Boulevard de l'Enseignement 1, 5600 Philipeville "],
              participants_number: 3,
              participants_max: 14
              },
          },
          { type: "training2_sessions",
            details: { training_id: this.trainings[1].name,
              day1: "lundi 20 janvier 2020",
              start_time1: "19h",
              end_time1: "22h30", 
              day2: "/",
              trainer1_id: "Eddy Vanhorenbeek",
              location_id: ["Maison Croix-Rouge Ottignies | Louvain-la-Neuve | Court-St-Etienne", "Rue de Franquenies 10, 1341 Céroux (Ottignies)"],
              participants_number : 12,
              participants_max: 14
              },
          },
          { type: "training2_sessions",
            details: { training_id: this.trainings[1].name,
              day1: "mardi 18 février 2020",
              start_time1: "19h",
              end_time1: "22h30", 
              day2: "/",
              trainer1_id: "Xavier Hennebert",
              location_id: ["Maison Croix-Rouge Braine-l'Alleud", "Rue du Ménil 47, 1420 Braine-l'Alleud"],
              participants_number : 14,
              participants_max: 14

              },
          },
]*/





}
