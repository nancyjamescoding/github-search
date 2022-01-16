import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetReposByUsernameService } from '../get-repos-by-username-service/get-repos-by-username.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  repos : []
  constructor(private getReposByUserNameService: GetReposByUsernameService) {
    this.repos = []
   }

  ngOnInit(){
    interface ApiResponse{
      author:string;
      quote:string;
    } 
}

  onSearch(userName: string) {
    this.getReposByUserNameService.getReposByUserName('Charlesjonah')
    this.repos = this.getReposByUserNameService.repos
  }




}
