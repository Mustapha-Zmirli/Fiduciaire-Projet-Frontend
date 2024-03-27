import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';

import { PaiementAdminModule } from './view/paiement/paiement-admin.module';
import { PaiementAdminRoutingModule } from './view/paiement/paiement-admin-routing.module';
import { CommunAdminModule } from './view/commun/commun-admin.module';
import { CommunAdminRoutingModule } from './view/commun/commun-admin-routing.module';
import { DemandeAdminModule } from './view/demande/demande-admin.module';
import { DemandeAdminRoutingModule } from './view/demande/demande-admin-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';
import { AcceuilComponent } from './view/acceuil/acceuil.component';
import { ServsComponent } from './view/servs/servs.component';
import { ClientsComponent } from './view/clients/clients.component';
import { ContactComponent } from './view/contact/contact.component';
import { AgenceComponent } from './view/agence/agence.component';
import { DevisComponent } from './view/devis/devis.component';


@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent,
   AcceuilComponent,
   ServsComponent,
   ClientsComponent,
   ContactComponent,
   AgenceComponent,
   DevisComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
  PaiementAdminModule,
  PaiementAdminRoutingModule,
  CommunAdminModule,
  CommunAdminRoutingModule,
  DemandeAdminModule,
  DemandeAdminRoutingModule,
  SecurityModule,
  SecurityRoutingModule
  ],
  exports: [
  LoginAdminComponent,
  RegisterAdminComponent,

    PaiementAdminModule,
    CommunAdminModule,
    DemandeAdminModule,
  SecurityModule
  ],

})
export class AdminModule { }
