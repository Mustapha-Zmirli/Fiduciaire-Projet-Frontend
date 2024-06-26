import {Component, OnInit} from '@angular/core';
import {SocieteAdminService} from 'src/app/controller/service/admin/commun/SocieteAdmin.service';
import {SocieteDto} from 'src/app/controller/model/commun/Societe.model';
import {SocieteCriteria} from 'src/app/controller/criteria/commun/SocieteCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-societe-list-admin',
  templateUrl: './societe-list-admin.component.html'
})
export class SocieteListAdminComponent extends AbstractListController<SocieteDto, SocieteCriteria, SocieteAdminService>  implements OnInit {

    override fileName = 'Societe';




    constructor( private societeService: SocieteAdminService  ) {
        super(societeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Societe').subscribe(() => {
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
            {field: 'ice', header: 'Ice'},
            {field: 'rc', header: 'Rc'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Ice': e.ice ,
                 'Rc': e.rc ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Ice': this.criteria.ice ? this.criteria.ice : environment.emptyForExport ,
            'Rc': this.criteria.rc ? this.criteria.rc : environment.emptyForExport ,
        }];
      }
}
