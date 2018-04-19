import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Vendor
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/about/about.component';
import { CodeComponent } from './components/code/code.component';

//Services
import {CodeService} from './services/code.service'



const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'code',
    component: CodeComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    AboutComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PdfViewerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: true }, // <-- debugging purposes only
    )
  ],
  providers: [CodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
