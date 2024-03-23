import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ComptableAdminService} from 'src/app/controller/service/admin/commun/ComptableAdmin.service';
import {ComptableDto} from 'src/app/controller/model/commun/Comptable.model';
import {ComptableCriteria} from 'src/app/controller/criteria/commun/ComptableCriteria.model';

@Component({
  selector: 'app-comptable-view-admin',
  templateUrl: './comptable-view-admin.component.html'
})
export class ComptableViewAdminComponent extends AbstractViewController<ComptableDto, ComptableCriteria, ComptableAdminService> implements OnInit {


    constructor(private comptableService: ComptableAdminService){
        super(comptableService);
    }

    ngOnInit(): void {
    }




}
