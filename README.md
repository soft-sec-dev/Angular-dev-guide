### First-app-lesson-00
- Stand alone Components
- First tutorial working
- Topics
  - StandAloneComponents -> `ng generate component home --standalone --inline-template --skip-tests`
  - Interface -> `ng generate interface housinglocation` how import? -> `import { HousingLocation } from '../housinglocation'`
  - Add inputs to components -> `@Input() data!:string`
  - Add a property binding to a component’s template -> ` [housingLocation]="housingLocation"` : for @Input() -> parent to child
  - Add an interpolation to a component’s template -> {{data}}
  - Use *ngFor to list objects in component -> `*ngFor='let data of datsas'`
  - Angular Services -> `ng generate service housing --skip-tests`
  - Add routes to the application -> config.ts: export Routes -> provideRouter(routerconfig)
  - Integrate details page into application -> how to get the id -> `route: ActivateRoute: (this.route.snapshot.params['id'])`
  - Adding a form to your Angular app -> `import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';` -> in standAloneComponent only need to imports:[ReactiveForms]
    - CreateTheFormListenning -> `applyForms = new FormGruoup({data: FormControl(')})`
  - Add the search feature to your app -> `<button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>`
  - json-server to comunicate http -> `json-server --watch db.json`
s