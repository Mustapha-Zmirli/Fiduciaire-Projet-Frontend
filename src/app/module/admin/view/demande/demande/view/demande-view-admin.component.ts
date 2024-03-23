import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {DemandeAdminService} from 'src/app/controller/service/admin/demande/DemandeAdmin.service';
import {DemandeDto} from 'src/app/controller/model/demande/Demande.model';
import {DemandeCriteria} from 'src/app/controller/criteria/demande/DemandeCriteria.model';

import {SocieteDto} from 'src/app/controller/model/commun/Societe.model';
import {SocieteAdminService} from 'src/app/controller/service/admin/commun/SocieteAdmin.service';
import {ComptableDto} from 'src/app/controller/model/commun/Comptable.model';
import {ComptableAdminService} from 'src/app/controller/service/admin/commun/ComptableAdmin.service';
@Component({
  selector: 'app-demande-view-admin',
  templateUrl: './demande-view-admin.component.html'
})
export class DemandeViewAdminComponent extends AbstractViewController<DemandeDto, DemandeCriteria, DemandeAdminService> implements OnInit {


    constructor(private demandeService: DemandeAdminService, private societeService: SocieteAdminService, private comptableService: ComptableAdminService){
        super(demandeService);
    }

    ngOnInit(): void {
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


}
