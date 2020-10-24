import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SummaryComponent} from "./components/details/summary/summary.component";
import {ProfessionalComponent} from "./components/details/professional/professional.component";
import {EducationComponent} from "./components/details/education/education.component";
import {SkillsComponent} from "./components/details/skills/skills.component";
import {PersonalComponent} from "./components/details/personal/personal.component";
import {AddProtfolioComponent} from "./components/details/add-protfolio/add-protfolio.component";
import {ListProtfolioComponent} from "./components/details/list-protfolio/list-protfolio.component";
import {AppComponent} from "./app.component";
import {LeftSideMenuComponent} from "./components/shared/left-side-menu.component";

const routes: Routes = [
  {
    path: 'summary',
    component: SummaryComponent
  },{
    path: 'professional',
    component: ProfessionalComponent
  },{
    path: 'education',
    component: EducationComponent
  },{
    path: 'skills',
    component: SkillsComponent
  },{
    path: 'personal',
    component: PersonalComponent
  },{
    path: 'portfolio/add',
    component: AddProtfolioComponent
  },{
    path: 'portfolio/list',
    component: ListProtfolioComponent
  },
  {
    path: '',
    component: SummaryComponent
  },
  {
    path: '**',
    component: SummaryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
