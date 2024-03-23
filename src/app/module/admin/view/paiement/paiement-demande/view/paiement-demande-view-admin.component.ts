import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PaiementDemandeAdminService} from 'src/app/controller/service/admin/paiement/PaiementDemandeAdmin.service';
import {PaiementDemandeDto} from 'src/app/controller/model/paiement/PaiementDemande.model';
import {PaiementDemandeCriteria} from 'src/app/controller/criteria/paiement/PaiementDemandeCriteria.model';

@Component({
  selector: 'app-paiement-demande-view-admin',
  templateUrl: './paiement-demande-view-admin.component.html'
})
export class PaiementDemandeViewAdminComponent extends AbstractViewController<PaiementDemandeDto, PaiementDemandeCriteria, PaiementDemandeAdminService> implements OnInit {


    constructor(private paiementDemandeService: PaiementDemandeAdminService){
        super(paiementDemandeService);
    }

    ngOnInit(): void {
    }




}
