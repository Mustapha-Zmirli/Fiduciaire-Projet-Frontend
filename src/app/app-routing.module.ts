import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from "src/app/zynerator/security/guards/auth.guard";
import {AccessComponent} from "src/app/demo/components/auth/access/access.component";
import {AppLayoutComponent} from "src/app/layout/app.layout.component";

import {LoginAdminComponent} from 'src/app/module/admin/login-admin/login-admin.component';
import {RegisterAdminComponent} from 'src/app/module/admin/register-admin/register-admin.component';
import {AcceuilComponent} from "./module/admin/view/acceuil/acceuil.component";
import {ServsComponent} from "./module/admin/view/servs/servs.component";
import {ClientsComponent} from "./module/admin/view/clients/clients.component";
import {ContactComponent} from "./module/admin/view/contact/contact.component";
import {DevisComponent} from "./module/admin/view/devis/devis.component";
import {AgenceComponent} from "./module/admin/view/agence/agence.component";
@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {path: '', component: AcceuilComponent},
                {path: 'acceuil', component: AcceuilComponent},
                {path: 'servs', component: ServsComponent},
                {path: 'clients', component: ClientsComponent},
                {path: 'contact', component: ContactComponent},
                {path: 'agence', component: AgenceComponent},
                {path: 'devis', component: DevisComponent},
            {path: 'admin/login', component: LoginAdminComponent },
            {path: 'admin/register', component: RegisterAdminComponent },
            {
            path: 'app',
            component: AppLayoutComponent,
            children: [
                {
                    path: 'admin',
                    loadChildren: () => import( './module/admin/admin-routing.module').then(x => x.AdminRoutingModule),
                    canActivate: [AuthGuard],
                },
                    { path: 'denied', component: AccessComponent },
                ],
                canActivate: [AuthGuard]
                },
            ],
                { scrollPositionRestoration: 'enabled' }
            ),
        ],
    exports: [RouterModule],
    })
export class AppRoutingModule { }
