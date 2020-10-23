import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { AddProtfolioComponent } from './components/details/add-protfolio/add-protfolio.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgSelect2Module } from 'ng-select2';
import { ListProtfolioComponent } from './components/details/list-protfolio/list-protfolio.component';
@NgModule({
  declarations: [
    AppComponent,
    LeftSideMenuComponent,
    MainPageComponent,
    SummaryComponent,
    ProfessionalComponent,
    EducationComponent,
    SkillsComponent,
    PersonalComponent,
    AddProtfolioComponent,
    ListProtfolioComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EditorModule,
    NgSelect2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
