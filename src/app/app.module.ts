import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSideMenuComponent } from './components/shared/left-side-menu.component';
import { MainPageComponent } from './components/details/main-page/main-page.component';
import { SummaryComponent } from './components/details/summary/summary.component';
import { ProfessionalComponent } from './components/details/professional/professional.component';
import { EducationComponent } from './components/details/education/education.component';
import { SkillsComponent } from './components/details/skills/skills.component';
import { CommonModule } from "@angular/common";
import { PersonalComponent } from './components/details/personal/personal.component';
@NgModule({
  declarations: [
    AppComponent,
    LeftSideMenuComponent,
    MainPageComponent,
    SummaryComponent,
    ProfessionalComponent,
    EducationComponent,
    SkillsComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
