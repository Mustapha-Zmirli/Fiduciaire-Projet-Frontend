import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SocieteDto} from '../commun/Societe.model';
import {ComptableDto} from '../commun/Comptable.model';

export class DemandeDto extends BaseDto{

    public code: string;

    public libelle: string;

   public dateDemande: Date;

   public dateExigibilite: Date;

    public typeDemande: string;

    public etatDemande: string;

   public dateValidation: Date;

   public dateTraitement: Date;

    public societe: SocieteDto ;
    public comptableTraitant: ComptableDto ;
    public comptableValidateur: ComptableDto ;
    

    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.dateDemande = null;
        this.dateExigibilite = null;
        this.typeDemande = '';
        this.etatDemande = '';
        this.dateValidation = null;
        this.dateTraitement = null;
        this.societe = new SocieteDto() ;
        this.comptableTraitant = new ComptableDto() ;
        this.comptableValidateur = new ComptableDto() ;

        }

}
