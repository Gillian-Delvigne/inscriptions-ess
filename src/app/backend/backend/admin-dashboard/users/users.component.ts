import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import {MatTableDataSource} from '@angular/material';
import {AuthService} from '../../../../front-end/shared/auth.service';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../admin.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email', 'role', 'gender', 'phone', 'action'];
  dataSource = new MatTableDataSource();
  selectedUser: any;
  openModal = false;
  openModalDel = false;
  openModalUser = false;

  public entities: any;
  nom: any;
  prenom: any;
  genre: any;
  dob: any;
  email: any;
  phone: any;
  matricule: any;
  typeEntity: any;
  entity: any;
  localEntities: any;
  password: any;
  cpassword: any;
  emailExists: any;
  apiError: string;
  activities: any;
  countries: any;
  country: any;
  typeActivity: any;
  activityList: any;
  activity: any;
  openModalEdit = false;
  datePipe = new DatePipe('en-US');

  constructor(public usersService: UsersService,
              public toastr: ToastrService,
              public adminService: AdminService) {
    console.log(this.dataSource);
    this.adminService.showDashboard = false;
  }

  ngOnInit() {
    this.getUser();
    this.entities = [
      {
        id: 1,
        name: 'Départements & Services centraux',
        localEntities: [
          {name: 'Asbl - Activités internationales'},
          {name: 'Dpt - Action Sociale'},
          {name: 'Dpt - Accueil des Demandeurs d\'Asile'},
          {name: 'Dpt - Communication, Marketing & Commercial'},
          {name: 'Dpt - Finances et Administration'},
          {name: 'Dpt - Institut de Formation'},
          {name: 'Dpt - Jeunesse'},
          {name: 'Dpt - Réseau'},
          {name: 'Dpt - Ressources Humaines et Volontariat'},
          {name: 'Service Francophone du Sang'},
          {name: 'Service Logistique Transversale'}]
      },
      {
        id: 2,
        name: 'Secours (Wallonie)',
        localEntities: [
          {name: 'CS - BLEGNY'},
          {name: 'CS - BRABANT OUEST'},
          {name: 'CS - CHARLEROI'},
          {name: 'CS - HAUTE SENNE'},
          {name: 'CS - HERSTAL - OUPEYE'},
          {name: 'CS - HESBAYE-CONDROZ'},
          {name: 'CS - JODOIGNE'},
          {name: 'CS - LIEGE'},
          {name: 'CS - LUXEMBOURG'},
          {name: 'CS - MONS'},
          {name: 'CS - MOUSCRON'},
          {name: 'CS - NAMUR'},
          {name: 'CS - OTTIGNIES'},
          {name: 'CS - OUGREE'},
          {name: 'CS - PHILIPPEVILLE'},
          {name: 'CS - ROCHEFORT'},
          {name: 'CS - SPA'},
          {name: 'CS - TOURNAI'}
        ]
      },
      {
        id: 3,
        name: 'Secours (Bruxelles)',
        localEntities: [
          {name: 'SL - Anderlecht'},
          {name: 'SL - Auderghem'},
          {name: 'SL - Berchem-Saint-Agathe'},
          {name: 'SL - Bruxelles-ville'},
          {name: 'SL - Etterbeek'},
          {name: 'SL - Evere'},
          {name: 'SL - Forest'},
          {name: 'SL - Ganshoren - Koekelberg'},
          {name: 'SL - Ixelles'},
          {name: 'SL - Jette'},
          {name: 'SL - Molenbeek-Saint-Jean'},
          {name: 'SL - Schaerbeek'},
          {name: 'SL - Uccle'},
          {name: 'SL - Watermael-Boitsfort'},
          {name: 'SL - Woluwé-Saint-Lambert'},
          {name: 'SL - Woluwé-Saint-Pierre'},
          {name: 'Service Ambulances'},
          {name: 'UABC'}
        ]
      },
      {
        id: 4,
        name: 'Comité Provincial',
        localEntities: [
          {name: 'Comité Deutschsprachige Gemeinschaft'},
          {name: 'Comité de Bruxelles-Capitale'},
          {name: 'Comité de Liège'},
          {name: 'Comité de Namur'},
          {name: 'Comité du Brabant Wallon'},
          {name: 'Comité du Hainaut'},
          {name: 'Comité du Luxembourg'}]
      },
      {
        id: 5,
        name: 'SISU',
        localEntities: [{
          name: 'Service d\'intervention psycho-social urgent'
        }]
      },
      {
        id: 6,
        name: 'Centre ADA',
        localEntities: [
          {name: 'Carda'},
          {name: 'Centre \'Belle-Vue\' (Eupen)'},
          {name: 'Centre \'Bocq\' (Yvoir)'},
          {name: 'Centre \'Chantecler\' (Oignies)'},
          {name: 'Centre \'Couleurs du monde\' (Rendeux)'},
          {name: 'Centre \'Des Racines et des Ailes\' (Manhay)'},
          {name: 'Centre \'Henry Dunant\' (Hotton)'},
          {name: 'Centre \'L\'Amblève\' (Nonceveux)'},
          {name: 'Centre \'L\'Envol\' (Bierset)'},
          {name: 'Centre \'La Trientale\' (Banneux)'},
          {name: 'Centre \'Le Celly\' (Sainte-Ode)'},
          {name: 'Centre \'Le Merisier\' (Fraipont)'},
          {name: 'Centre \'Le Relais du Monde\' (Natoye)'},
          {name: 'Centre \'Pierre Bleue\' (Yvoir)'},
          {name: 'Centre \'Saint-Jean\' (Tournai)'},
          {name: 'Centre \'Sankt Elisabeth Haus\' (Manderfeld)'},
          {name: 'Centre \'Visages du Monde\' (Arlon)'},
          {name: 'Centre CR sans-abris'},
          {name: 'Centre de Belgrade'},
          {name: 'Centre de Jalhay (Camping Spa d\'Or)'},
          {name: 'Centre de Jambes'},
          {name: 'Centre de Jette'},
          {name: 'Centre de Uccle'},
          {name: 'Centre Quartier Général Leman (Ans)'},
          {name: 'SDF'}]
      },
      {
        id: 7,
        name: 'Réseau : MCR / SL',
        localEntities: [{name: 'BW - MCR Ardennes Brabançonnes'}, {name: 'BW - MCR Bassin de la Senne'}, {name: 'BW - MCR Braine l\'Alleud'}, {name: 'BW - MCR des Deux Gette'}, {name: 'BW - MCR La Hulpe'}, {name: 'BW - MCR Nivelles'}, {name: 'BW - MCR Ottignies-LLN-Court-St-Etienne'}, {name: 'BW - MCR Waterloo'}, {name: 'BW - MCR Wavre'}, {name: 'BX - SL Anderlecht'}, {name: 'BX - SL Auderghem'}, {name: 'BX - SL Berchem-Saint-Agathe'}, {name: 'BX - SL Bruxelles-ville'}, {name: 'BX - SL Etterbeek'}, {name: 'BX - SL Evere'}, {name: 'BX - SL Forest'}, {name: 'BX - SL Ganshoren - Koekelberg'}, {name: 'BX - SL Ixelles'}, {name: 'BX - SL Jette'}, {name: 'BX - SL Molenbeek-Saint-Jean'}, {name: 'BX - SL Schaerbeek'}, {name: 'BX - SL Uccle'}, {name: 'BX - SL Watermael-Boitsfort'}, {name: 'BX - SL Woluwe-Saint-Lambert'}, {name: 'BX - SL Woluwé-Saint-Pierre'}, {name: 'DE - MCR Amel'}, {name: 'DE - MCR Bütgenbach - Büllingen'}, {name: 'DE - MCR Deutschsprachige Gemeinschaft'}, {name: 'DE - MCR Eupen'}, {name: 'DE - MCR Kelmis'}, {name: 'DE - MCR Raeren'}, {name: 'DE - MCR Sankt Vith'}, {name: 'HT - MCR Beloeil - Bernissart - Chièvres'}, {name: 'HT - MCR Boussu-Hornu - Colfontaine'}, {name: 'HT - MCR Chimay-Momignies'}, {name: 'HT - MCR Cité d\'Arenberg'}, {name: 'HT - MCR Deux Dendres'}, {name: 'HT - MCR Gilly-Ransart-Fleurus'}, {name: 'HT - MCR Haut Pays'}, {name: 'HT - MCR Haute Senne'}, {name: 'HT - MCR Jurbise-Lens'}, {name: 'HT - MCR La Louvière-Le Roeulx'}, {name: 'HT - MCR Les Gilles'}, {name: 'HT - MCR Lessines'}, {name: 'HT - MCR Leuze-Péruwelz'}, {name: 'HT - MCR Mariemont'}, {name: 'HT - MCR Mons-Quévy'}, {name: 'HT - MCR Mouscron'}, {name: 'HT - MCR Pays de Charleroi'}, {name: 'HT - MCR Pays des Collines'}, {name: 'HT - MCR Ravel'}, {name: 'HT - MCR Saint-Ghislain-Quaregnon-Frameries'}, {name: 'HT - MCR Terrils Verts'}, {name: 'HT - MCR Tournai'}, {name: 'HT - MCR Val de l\'Escaut'}, {name: 'HT - MCR Val de Lys'}, {name: 'HT - MCR Val des Aulnes'}, {name: 'LG - MCR Awans - Ans'}, {name: 'LG - MCR Aywaille - Hamoir - Ouffet'}, {name: 'LG - MCR Bassenge-Juprelle-Oupeye'}, {name: 'LG - MCR Blegny - Fléron - Visé'}, {name: 'LG - MCR Chaudfontaine'}, {name: 'LG - MCR Liège - Angleur'}, {name: 'LG - MCR Malmedy-Waimes'}, {name: 'LG - MCR Stavelot'}, {name: 'LG - MCR Verviers'}, {name: 'LG - MCR Waremme'}, {name: 'LG - MCR Welkenraedt - Aubel'}, {name: 'LX - MCR Arlon'}, {name: 'LX - MCR Attert - Martelange - Fauvillers'}, {name: 'LX - MCR Aubange - Messancy'}, {name: 'LX - MCR Bastogne'}, {name: 'LX - MCR Centre Ardennes'}, {name: 'LX - MCR Docteur Lagneau'}, {name: 'LX - MCR Dominique Franck'}, {name: 'LX - MCR Florenville - Chiny'}, {name: 'LX - MCR Marche'}, {name: 'LX - MCR Neufchâteau - Léglise'}, {name: 'LX - MCR Nord - Ardenne'}, {name: 'LX - MCR Ourthe et Aisne'}, {name: 'LX - MCR Rulles et Semois'}, {name: 'LX - MCR Salm et Ourthe'}, {name: 'LX - MCR Sud Gaume'}, {name: 'NR - MCR Cerwal'}, {name: 'NR - MCR Condroz Haute-Meuse'}, {name: 'NR - MCR Entre Meuse et Lesse'}, {name: 'NR - MCR Floreffe'}, {name: 'NR - MCR Gedinne'}, {name: 'NR - MCR Gembloux'}, {name: 'NR - MCR La Charlemagne'}, {name: 'NR - MCR La Mehaigne'}, {name: 'NR - MCR Les Eaux Vives'}, {name: 'NR - MCR Mettet - Fosses-la-Ville'}, {name: 'NR - MCR Namur'}, {name: 'NR - MCR Rochefort'}, {name: 'NR - MCR Val de Sambre'}]
      },
      {
        id: 8,
        name: 'Autre',
        localEntities: [{name: 'Autre'}]
      }
    ];
    this.activities = [
      {id: 1,
        type: 'Action sociale',
        activity: [{name: 'Accueil-Permanence'}, {name: 'Activités collectives'}, {name: 'Bar à soupe'}, {name: 'Buanderie sociale'}, {name: 'Colis alimentaire'}, {name: 'Coordination Action sociale'}, {name: 'Croix-Rouge sur roues '}, {name: 'Droguerie sociale'}, {name: 'Epicerie sociale'}, {name: 'Espace Migrants'}, {name: 'Hestia'}, {name: 'Hôpital'}, {name: 'Itinérances'}, {name: 'Maison de repos'}, {name: 'Rétablissement des liens familiaux'}, {name: 'Sans abri'}, {name: 'Urgence sociale'}, {name: 'Autre'}],
      },
      {id: 2,
        type: 'Activités Ressources',
        activity: [{name: 'Bouquinerie'}, {name: 'Brocante'}, {name: 'Coordination Ressources'}, {name: 'Quinzaine'}, {name: 'Récolte de fonds'}, {name: 'SLMP'}, {name: 'Vesti-boutique'}],
      },
      {id: 3,
        type: 'Activités Support',
        activity: [{name: 'Appui administratif/finance'}, {name: 'Informatique'}, {name: 'Logistique et bâtiments'}, {name: 'Relais Village'}, {name: 'Relations publiques/Communication'}, {name: 'Volontariat '}],
      },
      {id: 4,
        type: 'ADA',
        activity: [{name: 'Activités éducatives'}, {name: 'Aide à la mobilité'}, {name: 'Aide au logement'}, {name: 'Atelier Citoyenneté'}, {name: 'Profils variés'}],
      },
      {id: 5,
        type: 'Don de sang',
        activity: [
          {name: 'Appui aux collectes'},
          {name: 'Promotion'},
          {name: 'Coordination Don de sang'},
        ],
      },
      {id: 6,
        type: 'ECM - DIH',
        activity: [
          {name: 'ECM'},
          {name: 'DIH'},
        ],
      },
      {id: 7,
        type: 'Formations Premiers secours - Grand public',
        activity: [{name: '3 minutes'}, {name: 'BEPS'}, {name: 'Bosses et bobos'}, {name: 'Coordination Formation 1er Sec'}, {name: 'Formation Relais'}],
      },
      {id: 8,
        type: 'Formations Secours',
        activity: [{name: 'Ambulancier AMU'}, {name: 'Ambulancier TMS'}, {name: 'Equipier de base'}, {name: 'Equipier d’intervention'}, {name: 'Equipier en poste de soins'}, {name: 'Equipier VIR'}, {name: 'Grimage'}, {name: 'Intervenant RCP-DEA'}, {name: 'Pré-terrain'}, {name: 'Simulation'}, {name: 'VIR Communautaire'}],
      },
      {id: 9,
        type: 'Formations Transversales',
        activity: [{name: 'Gestion'}, {name: 'Pédagogie et communication'}, {name: 'Transport de personnes'}, {name: 'Module Au Cœur de la Croix-Rouge'}],
      },
      {id: 10,
        type: 'Jeunesse',
        activity: [
          {name: 'CRJ'},
          {name: 'Coordination Jeunesse'},
        ],
      },
      {id: 11,
        type: 'Secours',
        activity: [{name: 'AMBU 105'}, {name: 'AMBU 112'}, {name: 'APS'}, {name: 'Dispatching'}, {name: 'KTA'}, {name: 'Logistique-Navette'}, {name: 'SSCR'}, {name: 'Staff'}, {name: 'Télécom'}],
      },
      {id: 12,
        type: 'Service d’Intervention Psychosociale Urgente',
        activity: [{name: 'Intervention de base'}, {name: 'Coordination KTA'}, {name: 'Debriefing KTA'}, {name: 'Defusing KTA'}, {name: 'Coordination APS'}, {name: 'Intervention individuelle'}, {name: 'Conception de formation'}, {name: 'Formation'}, {name: 'Traçabilité'}],
      },
      {id: 13,
        type: 'Transport',
        activity: [{name: 'Charroi'}, {name: 'STS Transport de sang'}, {name: 'Transport social'}, {name: 'VSL/TPMR'}],
      },
      {id: 14,
        type: 'Autre',
        activity: [{name: 'Autre'}],
      },

    ];


    this.countries = [
      {name: 'Afrique du Sud'},
      {name: 'Afghanistan'},
      {name: 'Albanie'},
      {name: 'Algérie'},
      {name: 'Allemagne'},
      {name: 'Andorre'},
      {name: 'Angola'},
      {name: 'Antigua-et-Barbuda'},
      {name: 'Arabie Saoudite'},
      {name: 'Argentine'},
      {name: 'Arménie'},
      {name: 'Australie'},
      {name: 'Autriche'},
      {name: 'Azerbaïdjan'},
      {name: 'Bahamas'},
      {name: 'Bahreïn'},
      {name: 'Bangladesh'},
      {name: 'Barbade'},
      {name: 'Belgique'},
      {name: 'Belize'},
      {name: 'Bénin'},
      {name: 'Bhoutan'},
      {name: 'Biélorussie'},
      {name: 'Birmanie'},
      {name: 'Bolivie'},
      {name: 'Bosnie-Herzégovine'},
      {name: 'Botswana'},
      {name: 'Brésil'},
      {name: 'Brunei'},
      {name: 'Bulgarie'},
      {name: 'Burkina Faso'},
      {name: 'Burundi'},
      {name: 'Cambodge'},
      {name: 'Cameroun'},
      {name: 'Canada'},
      {name: 'Cap-Vert'},
      {name: 'Chili'},
      {name: 'Chine'},
      {name: 'Chypre'},
      {name: 'Colombie'},
      {name: 'Comores'},
      {name: 'Corée du Nord'},
      {name: 'Corée du Sud'},
      {name: 'Costa Rica'},
      {name: 'Côte d’Ivoire'},
      {name: 'Croatie'},
      {name: 'Cuba'},
      {name: 'Danemark'},
      {name: 'Djibouti'},
      {name: 'Dominique'},
      {name: 'Égypte'},
      {name: 'Émirats arabes unis'},
      {name: 'Équateur'},
      {name: 'Érythrée'},
      {name: 'Espagne'},
      {name: 'Eswatini'},
      {name: 'Estonie'},
      {name: 'États-Unis'},
      {name: 'Éthiopie'},
      {name: 'Fidji'},
      {name: 'Finlande'},
      {name: 'France'},
      {name: 'Gabon'},
      {name: 'Gambie'},
      {name: 'Géorgie'},
      {name: 'Ghana'},
      {name: 'Grèce'},
      {name: 'Grenade'},
      {name: 'Guatemala'},
      {name: 'Guinée'},
      {name: 'Guinée équatoriale'},
      {name: 'Guinée-Bissau'},
      {name: 'Guyana'},
      {name: 'Haïti'},
      {name: 'Honduras'},
      {name: 'Hongrie'},
      {name: 'Îles Cook'},
      {name: 'Îles Marshall'},
      {name: 'Inde'},
      {name: 'Indonésie'},
      {name: 'Irak'},
      {name: 'Iran'},
      {name: 'Irlande'},
      {name: 'Islande'},
      {name: 'Israël'},
      {name: 'Italie'},
      {name: 'Jamaïque'},
      {name: 'Japon'},
      {name: 'Jordanie'},
      {name: 'Kazakhstan'},
      {name: 'Kenya'},
      {name: 'Kirghizistan'},
      {name: 'Kiribati'},
      {name: 'Koweït'},
      {name: 'Laos'},
      {name: 'Lesotho'},
      {name: 'Lettonie'},
      {name: 'Liban'},
      {name: 'Liberia'},
      {name: 'Libye'},
      {name: 'Liechtenstein'},
      {name: 'Lituanie'},
      {name: 'Luxembourg'},
      {name: 'Macédoine'},
      {name: 'Madagascar'},
      {name: 'Malaisie'},
      {name: 'Malawi'},
      {name: 'Maldives'},
      {name: 'Mali'},
      {name: 'Malte'},
      {name: 'Maroc'},
      {name: 'Maurice'},
      {name: 'Mauritanie'},
      {name: 'Mexique'},
      {name: 'Micronésie'},
      {name: 'Moldavie'},
      {name: 'Monaco'},
      {name: 'Mongolie'},
      {name: 'Monténégro'},
      {name: 'Mozambique'},
      {name: 'Namibie'},
      {name: 'Nauru'},
      {name: 'Népal'},
      {name: 'Nicaragua'},
      {name: 'Niger'},
      {name: 'Nigeria'},
      {name: 'Niue'},
      {name: 'Norvège'},
      {name: 'Nouvelle-Zélande'},
      {name: 'Oman'},
      {name: 'Ouganda'},
      {name: 'Ouzbékistan'},
      {name: 'Pakistan'},
      {name: 'Palaos'},
      {name: 'Palestine'},
      {name: 'Panama'},
      {name: 'Papouasie-Nouvelle-Guinée'},
      {name: 'Paraguay'},
      {name: 'Pays-Bas'},
      {name: 'Pérou'},
      {name: 'Philippines'},
      {name: 'Pologne'},
      {name: 'Portugal'},
      {name: 'Qatar'},
      {name: 'République centrafricaine'},
      {name: 'République démocratique du Congo'},
      {name: 'République Dominicaine'},
      {name: 'République du Congo'},
      {name: 'République tchèque'},
      {name: 'Roumanie'},
      {name: 'Royaume-Uni'},
      {name: 'Russie'},
      {name: 'Rwanda'},
      {name: 'Saint-Kitts-et-Nevis'},
      {name: 'Saint-Vincent-et-les-Grenadines'},
      {name: 'Sainte-Lucie'},
      {name: 'Saint-Marin'},
      {name: 'Salomon'},
      {name: 'Salvador'},
      {name: 'Samoa'},
      {name: 'São Tomé-et-Principe'},
      {name: 'Sénégal'},
      {name: 'Serbie'},
      {name: 'Seychelles'},
      {name: 'Sierra Leone'},
      {name: 'Singapour'},
      {name: 'Slovaquie'},
      {name: 'Slovénie'},
      {name: 'Somalie'},
      {name: 'Soudan'},
      {name: 'Soudan du Sud'},
      {name: 'Sri Lanka'},
      {name: 'Suède'},
      {name: 'Suisse'},
      {name: 'Suriname'},
      {name: 'Syrie'},
      {name: 'Tadjikistan'},
      {name: 'Tanzanie'},
      {name: 'Tchad'},
      {name: 'Thaïlande'},
      {name: 'Timor oriental'},
      {name: 'Togo'},
      {name: 'Tonga'},
      {name: 'Trinité-et-Tobago'},
      {name: 'Tunisie'},
      {name: 'Turkménistan'},
      {name: 'Turquie'},
      {name: 'Tuvalu'},
      {name: 'Ukraine'},
      {name: 'Uruguay'},
      {name: 'Vanuatu'},
      {name: 'Vatican'},
      {name: 'Venezuela'},
      {name: 'Viêt Nam'},
      {name: 'Yémen'},
      {name: 'Zambie'},
      {name: 'Zimbabwe'}, ];
  }

  getUser(){
    this.usersService.getUsers().subscribe(
      res => {
        console.log(res, 'users');
        this.dataSource = new MatTableDataSource(res);
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  open(element: any) {
    this.openModal = true;
    this.selectedUser = element;
  }

  closeDialog() {
    this.openModal = false;
  }

  closeDialogDel() {
    this.openModalDel = false;
  }

  deleteRecord(element: any) {
    this.selectedUser = element;
    this.openModalDel = true;
  }

  deleteUser() {
    this.usersService.deleteUsers(this.selectedUser.user_id).subscribe(
      r => {
        console.log(r)
        if (r.affectedRows == 1) {
          this.getUser();
          this.openModalDel = false;
        } else {
          console.log('technical error');
        }
      }
    )
    // this.openModalDel = false;
  }

  addUser() {
    this.openModalUser = true;
  }

  onChange(value: any) {
    this.localEntities = this.entities.find(x => x.name === value).localEntities;
  }

  onChangeActivity(value: any) {
    this.activityList = this.activities.find(x => x.type === value).activity;
  }

  submit(form: NgForm) {
    console.log(form);

    if (form.form.status != 'VALID') {
      return;
    }
    console.log('submitted', form);

    const formData = {
      dob : form.form.controls.dob.value,
      email : form.form.controls.email.value,
      entity : form.form.controls.entity.value,
      genre : form.form.controls.genre.value,
      matricule : form.form.controls.matricule.value,
      nom : form.form.controls.nom.value,
      password : form.form.controls.password.value,
      phone : form.form.controls.phone.value,
      prenom : form.form.controls.prenom.value,
      typeEntity : form.form.controls.typeEntity.value,
      typeActivity : form.form.controls.typeActivity.value,
      activity : form.form.controls.activity.value,
      country : form.form.controls.country.value,
    };
    console.log('formData', formData);
    // return;
    this.usersService.signUp(formData).subscribe(
      r => {
        console.log(r);
        if (!r.status) {
          this.emailExists = r.message;
          this.apiError = '';
        }
        if (r.status) {
          this.showSuccess();
          this.emailExists = '';
          this.getUser();
          this.closeDialogUser();
          // this.adminService.saveUser(r.data[0]);
          // this.router.navigateByUrl('/admin/dashboard');
        }
      },
      err => {
        this.showFailure();
        this.apiError = 'Un problème technique est survenu : merci de réessayer plus tard.';
        console.log(err);
      }
    );
  }

  showSuccess() {
    this.toastr.success('Votre compte a bien été créé', 'Réussite');
  }
  showFailure() {
    this.toastr.error('Une erreur s\'est produite lors de la création de votre compte', 'Erreur');
  }

  closeDialogUser() {
    this.openModalUser = false;
  }

  editUser(element: any) {
    // console.log(element);
    this.selectedUser = element;
    this.openModalEdit = true;
    this.onChangeActivity(this.selectedUser.activity_type);
    this.onChange(this.selectedUser.general_entity);
  }

  submitUser(){
    // console.log(this.selectedUser);
    this.selectedUser.date_of_birth = this.datePipe.transform(this.selectedUser.date_of_birth, 'yyyy-MM-dd');
    this.usersService.updateUser(this.selectedUser).subscribe(
      res => {
        // console.log(res);
        if(res.affectedRows == 1){
          this.getUser();
          this.openModalEdit = false;
        }
      }
    )
  }

  closeDialogUserEdit(){
    this.openModalEdit = false;
  }
}
