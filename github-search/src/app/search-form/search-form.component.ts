import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UserForm } from '../user-form';
import { GetReposByUsernameService } from '../get-repos-by-username-service/get-repos-by-username.service';
import { Repo } from '../repo';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  repos : Repo []

  newUser = new UserForm('')
  constructor(private getReposByUserNameService: GetReposByUsernameService) {
    this.repos = []
   }

  ngOnInit() {}


  async onSearch() {
    await this.getReposByUserNameService.getReposByUserName(this.newUser.userName)
    let newRepos = this.getReposByUserNameService.repos
    newRepos.forEach((repo: any, index: number) => {
      this.repos.push(new Repo(repo.name, repo.description))
    });
  }

}

