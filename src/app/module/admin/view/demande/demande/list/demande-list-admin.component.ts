import {Component, OnInit} from '@angular/core';
import {DemandeAdminService} from 'src/app/controller/service/admin/demande/DemandeAdmin.service';
import {DemandeDto} from 'src/app/controller/model/demande/Demande.model';
import {DemandeCriteria} from 'src/app/controller/criteria/demande/DemandeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {SocieteDto} from 'src/app/controller/model/commun/Societe.model';
import {SocieteAdminService} from 'src/app/controller/service/admin/commun/SocieteAdmin.service';
import {ComptableDto} from 'src/app/controller/model/commun/Comptable.model';
import {ComptableAdminService} from 'src/app/controller/service/admin/commun/ComptableAdmin.service';


@Component({
  selector: 'app-demande-list-admin',
  templateUrl: './demande-list-admin.component.html'
})
export class DemandeListAdminComponent extends AbstractListController<DemandeDto, DemandeCriteria, DemandeAdminService>  implements OnInit {

    override fileName = 'Demande';


    societes: Array<SocieteDto>;
    comptableTraitants: Array<ComptableDto>;
    comptableValidateurs: Array<ComptableDto>;


    constructor( private demandeService: DemandeAdminService  , private societeService: SocieteAdminService, private comptableService: ComptableAdminService) {
        super(demandeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Demande').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadSociete();
                this.loadComptableTraitant();
                this.loadComptableValidateur();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'dateDemande', header: 'Date demande'},
            {field: 'dateExigibilite', header: 'Date exigibilite'},
            {field: 'societe?.code', header: 'Societe'},
            {field: 'typeDemande', header: 'Type demande'},
            {field: 'etatDemande', header: 'Etat demande'},
            {field: 'dateValidation', header: 'Date validation'},
            {field: 'dateTraitement', header: 'Date traitement'},
            {field: 'comptableTraitant?.cin', header: 'Comptable traitant'},
            {field: 'comptableValidateur?.cin', header: 'Comptable validateur'},
        ];
    }


    public async loadSociete(){
       this.societeService.findAllOptimized().subscribe(societes => this.societes = societes, error => console.log(error))
    }
    public async loadComptableTraitant(){
       this.comptableService.findAllOptimized().subscribe(comptableTraitants => this.comptableTraitants = comptableTraitants, error => console.log(error))
    }
    public async loadComptableValidateur(){
       this.comptableService.findAllOptimized().subscribe(comptableValidateurs => this.comptableValidateurs = comptableValidateurs, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                'Date demande': this.datePipe.transform(e.dateDemande , 'dd/MM/yyyy hh:mm'),
                'Date exigibilite': this.datePipe.transform(e.dateExigibilite , 'dd/MM/yyyy hh:mm'),
                'Societe': e.societe?.code ,
                 'Type demande': e.typeDemande ,
                 'Etat demande': e.etatDemande ,
                'Date validation': this.datePipe.transform(e.dateValidation , 'dd/MM/yyyy hh:mm'),
                'Date traitement': this.datePipe.transform(e.dateTraitement , 'dd/MM/yyyy hh:mm'),
                'Comptable traitant': e.comptableTraitant?.cin ,
                'Comptable validateur': e.comptableValidateur?.cin ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Date demande Min': this.criteria.dateDemandeFrom ? this.datePipe.transform(this.criteria.dateDemandeFrom , this.dateFormat) : environment.emptyForExport ,
            'Date demande Max': this.criteria.dateDemandeTo ? this.datePipe.transform(this.criteria.dateDemandeTo , this.dateFormat) : environment.emptyForExport ,
            'Date exigibilite Min': this.criteria.dateExigibiliteFrom ? this.datePipe.transform(this.criteria.dateExigibiliteFrom , this.dateFormat) : environment.emptyForExport ,
            'Date exigibilite Max': this.criteria.dateExigibiliteTo ? this.datePipe.transform(this.criteria.dateExigibiliteTo , this.dateFormat) : environment.emptyForExport ,
        //'Societe': this.criteria.societe?.code ? this.criteria.societe?.code : environment.emptyForExport ,
            'Type demande': this.criteria.typeDemande ? this.criteria.typeDemande : environment.emptyForExport ,
            'Etat demande': this.criteria.etatDemande ? this.criteria.etatDemande : environment.emptyForExport ,
            'Date validation Min': this.criteria.dateValidationFrom ? this.datePipe.transform(this.criteria.dateValidationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date validation Max': this.criteria.dateValidationTo ? this.datePipe.transform(this.criteria.dateValidationTo , this.dateFormat) : environment.emptyForExport ,
            'Date traitement Min': this.criteria.dateTraitementFrom ? this.datePipe.transform(this.criteria.dateTraitementFrom , this.dateFormat) : environment.emptyForExport ,
            'Date traitement Max': this.criteria.dateTraitementTo ? this.datePipe.transform(this.criteria.dateTraitementTo , this.dateFormat) : environment.emptyForExport ,
        //'Comptable traitant': this.criteria.comptableTraitant?.cin ? this.criteria.comptableTraitant?.cin : environment.emptyForExport ,
        //'Comptable validateur': this.criteria.comptableValidateur?.cin ? this.criteria.comptableValidateur?.cin : environment.emptyForExport ,
        }];
      }
}
