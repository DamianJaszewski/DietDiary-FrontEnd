import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recipe',
    loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)
  },
  {
    path: 'weeks',
    loadChildren: () => import('./weeks/weeks.module').then( m => m.WeeksPageModule)
  },
  {
    path: 'order-diet',
    loadChildren: () => import('./order-diet/order-diet.module').then( m => m.OrderDietPageModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module').then( m => m.ShoppingListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
