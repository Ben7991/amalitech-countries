import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "", loadChildren: () => import("./pages/countries/countries.module")
    .then(m => m.CountriesModule), pathMatch: 'full'
  },
  {
    path: ":id", loadChildren: () => import("./pages/country-detail/country-detail.module")
    .then(m => m.CountryDetailModule)
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
