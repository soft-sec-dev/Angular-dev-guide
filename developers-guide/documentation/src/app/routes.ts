import { Route } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { Route1Component } from "./pages/route1/route1.component";

export const ROUTES: Route[] = [
  { path: 'dashboard', component: AdminComponent },
  { path: 'admin', loadComponent: () => import('./components/admin/admin.component').then(mod => mod.AdminComponent) },
  { path: 'dashboard/route1', loadComponent: () => import('./pages/route1/route1.component').then(mod => mod.Route1Component) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]