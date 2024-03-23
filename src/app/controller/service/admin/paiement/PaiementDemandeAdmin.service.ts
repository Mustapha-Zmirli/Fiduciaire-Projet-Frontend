import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {PaiementDemandeDto} from 'src/app/controller/model/paiement/PaiementDemande.model';
import {PaiementDemandeCriteria} from 'src/app/controller/criteria/paiement/PaiementDemandeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PaiementDemandeAdminService extends AbstractService<PaiementDemandeDto, PaiementDemandeCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/paiementDemande/');
    }

    public constrcutDto(): PaiementDemandeDto {
        return new PaiementDemandeDto();
    }

    public constrcutCriteria(): PaiementDemandeCriteria {
        return new PaiementDemandeCriteria();
    }
}
