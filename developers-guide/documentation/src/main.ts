import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: 'BACKEND_URL', useValue: 'https://photoapp.looknongmodules.com/api' },
    provideRouter(ROUTES)
  ]
})

