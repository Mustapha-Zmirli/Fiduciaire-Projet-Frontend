import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {PaiementDemandeAdminService} from 'src/app/controller/service/admin/paiement/PaiementDemandeAdmin.service';
import {PaiementDemandeDto} from 'src/app/controller/model/paiement/PaiementDemande.model';
import {PaiementDemandeCriteria} from 'src/app/controller/criteria/paiement/PaiementDemandeCriteria.model';



@Component({
  selector: 'app-paiement-demande-edit-admin',
  templateUrl: './paiement-demande-edit-admin.component.html'
})
export class PaiementDemandeEditAdminComponent extends AbstractEditController<PaiementDemandeDto, PaiementDemandeCriteria, PaiementDemandeAdminService>   implements OnInit {


    private _validPaiementDemandeCode = true;
    private _validPaiementDemandeLibelle = true;




    constructor( private paiementDemandeService: PaiementDemandeAdminService ) {
        super(paiementDemandeService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validPaiementDemandeCode = value;
        this.validPaiementDemandeLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePaiementDemandeCode();
        this.validatePaiementDemandeLibelle();
    }
    public validatePaiementDemandeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validPaiementDemandeCode = false;
        } else {
            this.validPaiementDemandeCode = true;
        }
    }
    public validatePaiementDemandeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validPaiementDemandeLibelle = false;
        } else {
            this.validPaiementDemandeLibelle = true;
        }
    }






    get validPaiementDemandeCode(): boolean {
        return this._validPaiementDemandeCode;
    }
    set validPaiementDemandeCode(value: boolean) {
        this._validPaiementDemandeCode = value;
    }
    get validPaiementDemandeLibelle(): boolean {
        return this._validPaiementDemandeLibelle;
    }
    set validPaiementDemandeLibelle(value: boolean) {
        this._validPaiementDemandeLibelle = value;
    }

}
