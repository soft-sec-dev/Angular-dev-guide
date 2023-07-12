/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/

//? Routes
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes.module'

import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent,
    {providers: [provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]})
  .catch(err => console.error(err));
