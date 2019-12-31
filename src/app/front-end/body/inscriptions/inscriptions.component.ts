import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {
  

  constructor() { }

  model;

  entities = [
    {
      id: 1,
      name: 'Départements & Services centraux',
      localEntities: [{
        1: "Asbl - Activités internationales",
        2: "Dpt - Action Sociale",
        3: "Dpt - Accueil des Demandeurs d'Asile",
        4: "Dpt - Communication, Marketing & Commercial",
        5: "Dpt - Finances et Administration",
        6: "Dpt - Institut de Formation",
        7: "Dpt - Jeunesse",
        8: "Dpt - Réseau",
        9: "Dpt - Ressources Humaines et Volontariat",
        10: "Service Francophone du Sang",
        11: "Service Logistique Transversale"
      }]
    },
    {
      id: 2,
      name: 'Secours (Wallonie)',
      localEntities: [{
        1: "CS - BLEGNY",
        2: "CS - BRABANT OUEST",
        3: "CS - CHARLEROI",
        4: "CS - HAUTE SENNE",
        5: "CS - HERSTAL - OUPEYE",
        6: "CS - HESBAYE-CONDROZ",
        7: "CS - JODOIGNE",
        8: "CS - LIEGE",
        9: "CS - LUXEMBOURG",
        10: "CS - MONS",
        11: "CS - MOUSCRON",
        12: "CS - NAMUR",
        13: "CS - OTTIGNIES",
        14: "CS - OUGREE",
        15: "CS - PHILIPPEVILLE",
        16: "CS - ROCHEFORT",
        17: "CS - SPA",
        18: "CS - TOURNAI"
      }]
    },
    {
      id: 3,
      name: 'Secours (Bruxelles)',
      localEntities: [{
        1: "SL - Anderlecht",
        2: "SL - Auderghem",
        3: "SL - Berchem-Saint-Agathe",
        4: "SL - Bruxelles-ville",
        5: "SL - Etterbeek",
        6: "SL - Evere",
        7: "SL - Forest",
        8: "SL - Ganshoren - Koekelberg",
        9: "SL - Ixelles",
        10: "SL - Jette",
        11: "SL - Molenbeek-Saint-Jean",
        12: "SL - Schaerbeek",
        13: "SL - Uccle",
        14: "SL - Watermael-Boitsfort",
        15: "SL - Woluwé-Saint-Lambert",
        16: "SL - Woluwé-Saint-Pierre",
        17: "Service Ambulances",
        18: "UABC"
      }]
    },
    {
      id: 4,
      name: 'Comité Provincial',
      localEntities: [{
        1: "Comité Deutschsprachige Gemeinschaft",
        2: "Comité de Bruxelles-Capitale",
        3: "Comité de Liège",
        4: "Comité de Namur",
        5: "Comité du Brabant Wallon",
        6: "Comité du Hainaut",
        7: "Comité du Luxembourg"
      }]
    },
    {
      id: 5,
      name: 'SISU',
      localEntities: [{
        1: "Service d'intervention psycho-social urgent"
      }]
    },
    {
      id: 6,
      name: 'Centre ADA',
      localEntities: [{
        1: "Carda",
        2: "Centre 'Belle-Vue' (Eupen)",
        3: "Centre 'Bocq' (Yvoir)",
        4: "Centre 'Chantecler' (Oignies)",
        5: "Centre 'Couleurs du monde' (Rendeux)",
        6: "Centre 'Des Racines et des Ailes' (Manhay)",
        7: "Centre 'Henry Dunant' (Hotton)",
        8: "Centre 'L'Amblève' (Nonceveux)",
        9: "Centre 'L'Envol' (Bierset)",
        10: "Centre 'La Trientale' (Banneux)",
        11: "Centre 'Le Celly' (Sainte-Ode)",
        12: "Centre 'Le Merisier' (Fraipont)",
        13: "Centre 'Le Relais du Monde' (Natoye)",
        14: "Centre 'Pierre Bleue' (Yvoir)",
        15: "Centre 'Saint-Jean' (Tournai)",
        16: "Centre 'Sankt Elisabeth Haus' (Manderfeld)",
        17: "Centre 'Visages du Monde' (Arlon)",
        18: "Centre CR sans-abris",
        19: "Centre de Belgrade",
        20: "Centre de Jalhay (Camping Spa d'Or)",
        21: "Centre de Jambes",
        22: "Centre de Jette",
        23: "Centre de Uccle",
        24: "Centre Quartier Général Leman (Ans)",
        25: "SDF"
      }]
    },
    {
      id: 7,
      name: 'Réseau : MCR / SL',
      localEntities: [{
        1: "BW - MCR Ardennes Brabançonnes",
        2: "BW - MCR Bassin de la Senne",
        3: "BW - MCR Braine l'Alleud",
        4: "BW - MCR des Deux Gette",
        5: "BW - MCR La Hulpe",
        6: "BW - MCR Nivelles",
        7: "BW - MCR Ottignies-LLN-Court-St-Etienne",
        8: "BW - MCR Waterloo",
        9: "BW - MCR Wavre",
        10: "BX - SL Anderlecht",
        11: "BX - SL Auderghem",
        12: "BX - SL Berchem-Saint-Agathe",
        13: "BX - SL Bruxelles-ville",
        14: "BX - SL Etterbeek",
        15: "BX - SL Evere",
        16: "BX - SL Forest",
        17: "BX - SL Ganshoren - Koekelberg",
        18: "BX - SL Ixelles",
        19: "BX - SL Jette",
        20: "BX - SL Molenbeek-Saint-Jean",
        21: "BX - SL Schaerbeek",
        22: "BX - SL Uccle",
        23: "BX - SL Watermael-Boitsfort",
        24: "BX - SL Woluwe-Saint-Lambert",
        25: "BX - SL Woluwé-Saint-Pierre",
        26: "DE - MCR Amel",
        27: "DE - MCR Bütgenbach - Büllingen",
        28: "DE - MCR Deutschsprachige Gemeinschaft",
        29: "DE - MCR Eupen",
        30: "DE - MCR Kelmis",
        31: "DE - MCR Raeren",
        32: "DE - MCR Sankt Vith",
        33: "HT - MCR Beloeil - Bernissart - Chièvres",
        34: "HT - MCR Boussu-Hornu - Colfontaine",
        35: "HT - MCR Chimay-Momignies",
        36: "HT - MCR Cité d'Arenberg",
        37: "HT - MCR Deux Dendres",
        38: "HT - MCR Gilly-Ransart-Fleurus",
        39: "HT - MCR Haut Pays",
        40: "HT - MCR Haute Senne",
        41: "HT - MCR Jurbise-Lens",
        42: "HT - MCR La Louvière-Le Roeulx",
        43: "HT - MCR Les Gilles",
        44: "HT - MCR Lessines",
        45: "HT - MCR Leuze-Péruwelz",
        46: "HT - MCR Mariemont",
        47: "HT - MCR Mons-Quévy",
        48: "HT - MCR Mouscron",
        49: "HT - MCR Pays de Charleroi",
        50: "HT - MCR Pays des Collines",
        51: "HT - MCR Ravel",
        52: "HT - MCR Saint-Ghislain-Quaregnon-Frameries",
        53: "HT - MCR Terrils Verts",
        54: "HT - MCR Tournai",
        55: "HT - MCR Val de l'Escaut",
        56: "HT - MCR Val de Lys",
        57: "HT - MCR Val des Aulnes",
        58: "LG - MCR Awans - Ans",
        59: "LG - MCR Aywaille - Hamoir - Ouffet",
        60: "LG - MCR Bassenge-Juprelle-Oupeye",
        61: "LG - MCR Blegny - Fléron - Visé",
        62: "LG - MCR Chaudfontaine",
        63: "LG - MCR Liège - Angleur",
        64: "LG - MCR Malmedy-Waimes",
        65: "LG - MCR Stavelot",
        66: "LG - MCR Verviers",
        67: "LG - MCR Waremme",
        68: "LG - MCR Welkenraedt - Aubel",
        69: "LX - MCR Arlon",
        70: "LX - MCR Attert - Martelange - Fauvillers",
        71: "LX - MCR Aubange - Messancy",
        72: "LX - MCR Bastogne",
        73: "LX - MCR Centre Ardennes",
        74: "LX - MCR Docteur Lagneau",
        75: "LX - MCR Dominique Franck",
        76: "LX - MCR Florenville - Chiny",
        77: "LX - MCR Marche",
        78: "LX - MCR Neufchâteau - Léglise",
        79: "LX - MCR Nord - Ardenne",
        80: "LX - MCR Ourthe et Aisne",
        81: "LX - MCR Rulles et Semois",
        82: "LX - MCR Salm et Ourthe",
        83: "LX - MCR Sud Gaume",
        84: "NR - MCR Cerwal",
        85: "NR - MCR Condroz Haute-Meuse",
        86: "NR - MCR Entre Meuse et Lesse",
        87: "NR - MCR Floreffe",
        88: "NR - MCR Gedinne",
        89: "NR - MCR Gembloux",
        90: "NR - MCR La Charlemagne",
        91: "NR - MCR La Mehaigne",
        92: "NR - MCR Les Eaux Vives",
        93: "NR - MCR Mettet - Fosses-la-Ville",
        94: "NR - MCR Namur",
        95: "NR - MCR Rochefort",
        96: "NR - MCR Val de Sambre"
      }]
    }
  ];







  ngOnInit() {
  }

}
