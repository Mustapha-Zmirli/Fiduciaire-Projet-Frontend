import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ComptableDto} from 'src/app/controller/model/commun/Comptable.model';
import {ComptableCriteria} from 'src/app/controller/criteria/commun/ComptableCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ComptableAdminService extends AbstractService<ComptableDto, ComptableCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/comptable/');
    }

    public constrcutDto(): ComptableDto {
        return new ComptableDto();
    }

    public constrcutCriteria(): ComptableCriteria {
        return new ComptableCriteria();
    }
}
