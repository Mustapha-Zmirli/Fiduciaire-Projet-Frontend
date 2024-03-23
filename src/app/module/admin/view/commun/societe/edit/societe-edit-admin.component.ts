import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {SocieteAdminService} from 'src/app/controller/service/admin/commun/SocieteAdmin.service';
import {SocieteDto} from 'src/app/controller/model/commun/Societe.model';
import {SocieteCriteria} from 'src/app/controller/criteria/commun/SocieteCriteria.model';



@Component({
  selector: 'app-societe-edit-admin',
  templateUrl: './societe-edit-admin.component.html'
})
export class SocieteEditAdminComponent extends AbstractEditController<SocieteDto, SocieteCriteria, SocieteAdminService>   implements OnInit {


    private _validSocieteCode = true;




    constructor( private societeService: SocieteAdminService ) {
        super(societeService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validSocieteCode = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSocieteCode();
    }
    public validateSocieteCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validSocieteCode = false;
        } else {
            this.validSocieteCode = true;
        }
    }






    get validSocieteCode(): boolean {
        return this._validSocieteCode;
    }
    set validSocieteCode(value: boolean) {
        this._validSocieteCode = value;
    }

}
