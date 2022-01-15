import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'search-form', component:SearchFormComponent},
  {path: 'github-search', component:GithubSearchComponent},
  {path: '**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
