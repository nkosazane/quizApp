import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sport', loadChildren: './page/sport/sport.module#SportPageModule' },
  { path: 'science', loadChildren: './page/science/science.module#SciencePageModule' },
  { path: 'results', loadChildren: './page/results/results.module#ResultsPageModule' },
  { path: 'maths', loadChildren: './page/maths/maths.module#MathsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
