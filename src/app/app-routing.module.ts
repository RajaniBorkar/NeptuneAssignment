import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SummaryComponent} from "./components/details/summary/summary.component";
import {ProfessionalComponent} from "./components/details/professional/professional.component";
import {EducationComponent} from "./components/details/education/education.component";
import {SkillsComponent} from "./components/details/skills/skills.component";
import {PersonalComponent} from "./components/details/personal/personal.component";

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
