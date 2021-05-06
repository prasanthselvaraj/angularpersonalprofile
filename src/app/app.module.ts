import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'contact', component: ContactComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
