import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { RepoForm } from '../repo-form';
import { RepositoryService } from '../repository-service/repository.service';
@Component({
  selector: 'app-search-repo-form',
  templateUrl: './search-repo-form.component.html',
  styleUrls: ['./search-repo-form.component.css']
})
export class SearchRepoFormComponent implements OnInit {

  repo: Repo
  newRepoForm = new RepoForm('', '')
  constructor(private repoService: RepositoryService) { 
    this.repo = new Repo('', '')
  }

  ngOnInit(): void {
  }

  async onSearch() {
    await this.repoService.getRepoByRepoName(this.newRepoForm.repoName, this.newRepoForm.repoOwnerName)
    this.repo = new Repo(this.repoService.repo.name, this.repoService.repo.description)
  }

}
