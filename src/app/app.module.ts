import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'contact', component: ContactComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
