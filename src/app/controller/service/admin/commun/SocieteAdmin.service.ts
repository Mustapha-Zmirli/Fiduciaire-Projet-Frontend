import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {SocieteDto} from 'src/app/controller/model/commun/Societe.model';
import {SocieteCriteria} from 'src/app/controller/criteria/commun/SocieteCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class SocieteAdminService extends AbstractService<SocieteDto, SocieteCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/societe/');
    }

    public constrcutDto(): SocieteDto {
        return new SocieteDto();
    }

    public constrcutCriteria(): SocieteCriteria {
        return new SocieteCriteria();
    }
}
