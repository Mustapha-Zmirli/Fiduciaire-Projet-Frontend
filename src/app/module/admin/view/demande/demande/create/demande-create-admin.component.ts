import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {DemandeAdminService} from 'src/app/controller/service/admin/demande/DemandeAdmin.service';
import {DemandeDto} from 'src/app/controller/model/demande/Demande.model';
import {DemandeCriteria} from 'src/app/controller/criteria/demande/DemandeCriteria.model';
import {SocieteDto} from 'src/app/controller/model/commun/Societe.model';
import {SocieteAdminService} from 'src/app/controller/service/admin/commun/SocieteAdmin.service';
import {ComptableDto} from 'src/app/controller/model/commun/Comptable.model';
import {ComptableAdminService} from 'src/app/controller/service/admin/commun/ComptableAdmin.service';
@Component({
  selector: 'app-demande-create-admin',
  templateUrl: './demande-create-admin.component.html'
})
export class DemandeCreateAdminComponent extends AbstractCreateController<DemandeDto, DemandeCriteria, DemandeAdminService>  implements OnInit {



   private _validDemandeCode = true;
   private _validDemandeLibelle = true;
    private _validSocieteCode = true;
    private _validComptableTraitantCin = true;
    private _validComptableValidateurCin = true;

    constructor( private demandeService: DemandeAdminService , private societeService: SocieteAdminService, private comptableService: ComptableAdminService) {
        super(demandeService);
    }

    ngOnInit(): void {
        this.societe = new SocieteDto();
        this.societeService.findAll().subscribe((data) => this.societes = data);
        this.comptableTraitant = new ComptableDto();
        this.comptableService.findAll().subscribe((data) => this.comptableTraitants = data);
        this.comptableValidateur = new ComptableDto();
        this.comptableService.findAll().subscribe((data) => this.comptableValidateurs = data);
    }





    public override setValidation(value: boolean){
        this.validDemandeCode = value;
        this.validDemandeLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateDemandeCode();
        this.validateDemandeLibelle();
    }

    public validateDemandeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validDemandeCode = false;
        } else {
            this.validDemandeCode = true;
        }
    }
    public validateDemandeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validDemandeLibelle = false;
        } else {
            this.validDemandeLibelle = true;
        }
    }



    get societe(): SocieteDto {
        return this.societeService.item;
    }
    set societe(value: SocieteDto) {
        this.societeService.item = value;
    }
    get societes(): Array<SocieteDto> {
        return this.societeService.items;
    }
    set societes(value: Array<SocieteDto>) {
        this.societeService.items = value;
    }
    get createSocieteDialog(): boolean {
       return this.societeService.createDialog;
    }
    set createSocieteDialog(value: boolean) {
        this.societeService.createDialog= value;
    }
    get comptableTraitant(): ComptableDto {
        return this.comptableService.item;
    }
    set comptableTraitant(value: ComptableDto) {
        this.comptableService.item = value;
    }
    get comptableTraitants(): Array<ComptableDto> {
        return this.comptableService.items;
    }
    set comptableTraitants(value: Array<ComptableDto>) {
        this.comptableService.items = value;
    }
    get createComptableTraitantDialog(): boolean {
       return this.comptableService.createDialog;
    }
    set createComptableTraitantDialog(value: boolean) {
        this.comptableService.createDialog= value;
    }
    get comptableValidateur(): ComptableDto {
        return this.comptableService.item;
    }
    set comptableValidateur(value: ComptableDto) {
        this.comptableService.item = value;
    }
    get comptableValidateurs(): Array<ComptableDto> {
        return this.comptableService.items;
    }
    set comptableValidateurs(value: Array<ComptableDto>) {
        this.comptableService.items = value;
    }
    get createComptableValidateurDialog(): boolean {
       return this.comptableService.createDialog;
    }
    set createComptableValidateurDialog(value: boolean) {
        this.comptableService.createDialog= value;
    }



    get validDemandeCode(): boolean {
        return this._validDemandeCode;
    }

    set validDemandeCode(value: boolean) {
         this._validDemandeCode = value;
    }
    get validDemandeLibelle(): boolean {
        return this._validDemandeLibelle;
    }

    set validDemandeLibelle(value: boolean) {
         this._validDemandeLibelle = value;
    }

    get validSocieteCode(): boolean {
        return this._validSocieteCode;
    }
    set validSocieteCode(value: boolean) {
        this._validSocieteCode = value;
    }
    get validComptableTraitantCin(): boolean {
        return this._validComptableTraitantCin;
    }
    set validComptableTraitantCin(value: boolean) {
        this._validComptableTraitantCin = value;
    }
    get validComptableValidateurCin(): boolean {
        return this._validComptableValidateurCin;
    }
    set validComptableValidateurCin(value: boolean) {
        this._validComptableValidateurCin = value;
    }


}
