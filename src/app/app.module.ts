import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

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
      {path: 'home', component: HomeComponent, data: {animation: 'Home'} },
      {path: 'resume', component: ResumeComponent, data: {animation: 'Resume'} },
      {path: 'projects', component: ProjectsComponent, data: {animation: 'Projects'} },
      {path: 'skills', component: SkillsComponent, data: {animation: 'Skills'} },
      {path: 'contact', component: ContactComponent, data: {animation: 'Contact'} },
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
