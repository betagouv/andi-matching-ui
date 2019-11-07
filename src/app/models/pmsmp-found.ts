export class PmsmpFound {
  readonly id: number;
  nom: string;
  naf: string;
  sector: string;
  pmsmp_interest: Array<'TRUE' | 'FALSE'>;
  distance: string;
  adresse: string;
  commune: string;
  departement: string;
  macro_sector: string;
  siret: number;
  score_naf: number;
  score_welcome: number;
  score_contact: number;
  score_size: number;
  score_geo: number;
  score_total: number;
  google_search: string;

  constructor(options: {
    id: number;
    nom: string;
    naf: string;
    sector: string;
    pmsmp_interest: Array<'TRUE' | 'FALSE'>;
    distance: string;
    adresse: string;
    commune: string;
    departement: string;
    macro_sector: string;
    siret: number;
    score_naf: number;
    score_welcome: number;
    score_contact: number;
    score_size: number;
    score_geo: number;
    score_total: number;
    google_search: string;
  }) {
    this.id = options.id;
    this.nom = options.nom;
    this.naf = options.naf;
    this.sector = options.sector;
    this.pmsmp_interest = options.pmsmp_interest;
    this.distance = options.distance;
    this.adresse = options.adresse;
    this.commune = options.commune;
    this.departement = options.departement;
    this.macro_sector = options.macro_sector;
    this.siret = options.siret;
    this.score_naf = options.score_naf;
    this.score_welcome = options.score_welcome;
    this.score_contact = options.score_contact;
    this.score_size = options.score_size;
    this.score_geo = options.score_geo;
    this.score_total = options.score_total;
    this.google_search = options.google_search;
  }
}
