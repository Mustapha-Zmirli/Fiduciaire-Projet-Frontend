import {Component, OnInit} from '@angular/core';
import {PaiementDemandeAdminService} from 'src/app/controller/service/admin/paiement/PaiementDemandeAdmin.service';
import {PaiementDemandeDto} from 'src/app/controller/model/paiement/PaiementDemande.model';
import {PaiementDemandeCriteria} from 'src/app/controller/criteria/paiement/PaiementDemandeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-paiement-demande-list-admin',
  templateUrl: './paiement-demande-list-admin.component.html'
})
export class PaiementDemandeListAdminComponent extends AbstractListController<PaiementDemandeDto, PaiementDemandeCriteria, PaiementDemandeAdminService>  implements OnInit {

    override fileName = 'PaiementDemande';




    constructor( private paiementDemandeService: PaiementDemandeAdminService  ) {
        super(paiementDemandeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('PaiementDemande').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
