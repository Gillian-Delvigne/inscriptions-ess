import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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


  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLoggedin){
      this.router.navigateByUrl('/');
    }
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
        localEntities: [{name: 'Comité Deutschsprachige Gemeinschaft'}, {name: 'Comité de Bruxelles-Capitale'}, {name: 'Comité de Liège'}, {name: 'Comité de Namur'}, {name: 'Comité du Brabant Wallon'}, {name: 'Comité du Hainaut'}, {name: 'Comité du Luxembourg'}]
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
        localEntities: [{name: 'Carda'}, {name: 'Centre \'Belle-Vue\' (Eupen)'}, {name: 'Centre \'Bocq\' (Yvoir)'}, {name: 'Centre \'Chantecler\' (Oignies)'}, {name: 'Centre \'Couleurs du monde\' (Rendeux)'}, {name: 'Centre \'Des Racines et des Ailes\' (Manhay)'}, {name: 'Centre \'Henry Dunant\' (Hotton)'}, {name: 'Centre \'L\'Amblève\' (Nonceveux)'}, {name: 'Centre \'L\'Envol\' (Bierset)'}, {name: 'Centre \'La Trientale\' (Banneux)'}, {name: 'Centre \'Le Celly\' (Sainte-Ode)'}, {name: 'Centre \'Le Merisier\' (Fraipont)'}, {name: 'Centre \'Le Relais du Monde\' (Natoye)'}, {name: 'Centre \'Pierre Bleue\' (Yvoir)'}, {name: 'Centre \'Saint-Jean\' (Tournai)'}, {name: 'Centre \'Sankt Elisabeth Haus\' (Manderfeld)'}, {name: 'Centre \'Visages du Monde\' (Arlon)'}, {name: 'Centre CR sans-abris'}, {name: 'Centre de Belgrade'}, {name: 'Centre de Jalhay (Camping Spa d\'Or)'}, {name: 'Centre de Jambes'}, {name: 'Centre de Jette'}, {name: 'Centre de Uccle'}, {name: 'Centre Quartier Général Leman (Ans)'}, {name: 'SDF'}]
      },
      {
        id: 7,
        name: 'Réseau : MCR / SL',
        localEntities: [{name: 'BW - MCR Ardennes Brabançonnes'}, {name: 'BW - MCR Bassin de la Senne'}, {name: 'BW - MCR Braine l\'Alleud'}, {name: 'BW - MCR des Deux Gette'}, {name: 'BW - MCR La Hulpe'}, {name: 'BW - MCR Nivelles'}, {name: 'BW - MCR Ottignies-LLN-Court-St-Etienne'}, {name: 'BW - MCR Waterloo'}, {name: 'BW - MCR Wavre'}, {name: 'BX - SL Anderlecht'}, {name: 'BX - SL Auderghem'}, {name: 'BX - SL Berchem-Saint-Agathe'}, {name: 'BX - SL Bruxelles-ville'}, {name: 'BX - SL Etterbeek'}, {name: 'BX - SL Evere'}, {name: 'BX - SL Forest'}, {name: 'BX - SL Ganshoren - Koekelberg'}, {name: 'BX - SL Ixelles'}, {name: 'BX - SL Jette'}, {name: 'BX - SL Molenbeek-Saint-Jean'}, {name: 'BX - SL Schaerbeek'}, {name: 'BX - SL Uccle'}, {name: 'BX - SL Watermael-Boitsfort'}, {name: 'BX - SL Woluwe-Saint-Lambert'}, {name: 'BX - SL Woluwé-Saint-Pierre'}, {name: 'DE - MCR Amel'}, {name: 'DE - MCR Bütgenbach - Büllingen'}, {name: 'DE - MCR Deutschsprachige Gemeinschaft'}, {name: 'DE - MCR Eupen'}, {name: 'DE - MCR Kelmis'}, {name: 'DE - MCR Raeren'}, {name: 'DE - MCR Sankt Vith'}, {name: 'HT - MCR Beloeil - Bernissart - Chièvres'}, {name: 'HT - MCR Boussu-Hornu - Colfontaine'}, {name: 'HT - MCR Chimay-Momignies'}, {name: 'HT - MCR Cité d\'Arenberg'}, {name: 'HT - MCR Deux Dendres'}, {name: 'HT - MCR Gilly-Ransart-Fleurus'}, {name: 'HT - MCR Haut Pays'}, {name: 'HT - MCR Haute Senne'}, {name: 'HT - MCR Jurbise-Lens'}, {name: 'HT - MCR La Louvière-Le Roeulx'}, {name: 'HT - MCR Les Gilles'}, {name: 'HT - MCR Lessines'}, {name: 'HT - MCR Leuze-Péruwelz'}, {name: 'HT - MCR Mariemont'}, {name: 'HT - MCR Mons-Quévy'}, {name: 'HT - MCR Mouscron'}, {name: 'HT - MCR Pays de Charleroi'}, {name: 'HT - MCR Pays des Collines'}, {name: 'HT - MCR Ravel'}, {name: 'HT - MCR Saint-Ghislain-Quaregnon-Frameries'}, {name: 'HT - MCR Terrils Verts'}, {name: 'HT - MCR Tournai'}, {name: 'HT - MCR Val de l\'Escaut'}, {name: 'HT - MCR Val de Lys'}, {name: 'HT - MCR Val des Aulnes'}, {name: 'LG - MCR Awans - Ans'}, {name: 'LG - MCR Aywaille - Hamoir - Ouffet'}, {name: 'LG - MCR Bassenge-Juprelle-Oupeye'}, {name: 'LG - MCR Blegny - Fléron - Visé'}, {name: 'LG - MCR Chaudfontaine'}, {name: 'LG - MCR Liège - Angleur'}, {name: 'LG - MCR Malmedy-Waimes'}, {name: 'LG - MCR Stavelot'}, {name: 'LG - MCR Verviers'}, {name: 'LG - MCR Waremme'}, {name: 'LG - MCR Welkenraedt - Aubel'}, {name: 'LX - MCR Arlon'}, {name: 'LX - MCR Attert - Martelange - Fauvillers'}, {name: 'LX - MCR Aubange - Messancy'}, {name: 'LX - MCR Bastogne'}, {name: 'LX - MCR Centre Ardennes'}, {name: 'LX - MCR Docteur Lagneau'}, {name: 'LX - MCR Dominique Franck'}, {name: 'LX - MCR Florenville - Chiny'}, {name: 'LX - MCR Marche'}, {name: 'LX - MCR Neufchâteau - Léglise'}, {name: 'LX - MCR Nord - Ardenne'}, {name: 'LX - MCR Ourthe et Aisne'}, {name: 'LX - MCR Rulles et Semois'}, {name: 'LX - MCR Salm et Ourthe'}, {name: 'LX - MCR Sud Gaume'}, {name: 'NR - MCR Cerwal'}, {name: 'NR - MCR Condroz Haute-Meuse'}, {name: 'NR - MCR Entre Meuse et Lesse'}, {name: 'NR - MCR Floreffe'}, {name: 'NR - MCR Gedinne'}, {name: 'NR - MCR Gembloux'}, {name: 'NR - MCR La Charlemagne'}, {name: 'NR - MCR La Mehaigne'}, {name: 'NR - MCR Les Eaux Vives'}, {name: 'NR - MCR Mettet - Fosses-la-Ville'}, {name: 'NR - MCR Namur'}, {name: 'NR - MCR Rochefort'}, {name: 'NR - MCR Val de Sambre'}]
      }
    ];
    // this.localEntities = this.entities.find(x => x.name === 'Départements & Services centraux').localEntities;
    // console.log(this.localEntities)
  }

  onChange(value: any) {
    console.log(value, this.entities);
    // console.log(this.entities.find(x => x.name === value))
    this.localEntities = this.entities.find(x => x.name === value).localEntities;
    console.log(value, this.localEntities, this.localEntities);
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
    };
    console.log('formData', formData);

    this.authService.signUp(formData).subscribe(
      r => {
        console.log(r);
        if (!r.status) {
          this.emailExists = r.message;
          this.apiError = '';
        }
        if (r.status){
          this.emailExists = '';
          this.authService.saveUser(r.data[0]);
          this.router.navigateByUrl('/');
        }
      },
      err => {
        this.apiError = 'Technical Issue. Please try again';
        console.log(err);
      }
    )
  }
}
