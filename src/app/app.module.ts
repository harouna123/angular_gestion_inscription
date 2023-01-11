import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DepartementModule } from './departement/departement.module';
import { FiliereModule } from './filiere/filiere.module';
import { ClasseModule } from './classe/classe.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FiliereDepartementComponent } from './filiere-departement/filiere-departement.component';
import { ClasseFiliereComponent } from './classe-filiere/classe-filiere.component';
import { DossierModule } from './dossier/dossier.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilComponent,
    NavbarComponent,
    FiliereDepartementComponent,
    ClasseFiliereComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DepartementModule,
    FiliereModule,
    ClasseModule,
    HttpClientModule,
    DossierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
