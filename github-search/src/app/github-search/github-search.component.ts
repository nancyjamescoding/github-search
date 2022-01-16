import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';

import { GetReposByUsernameService } from '../get-repos-by-username-service/get-repos-by-username.service';
import { MyProfileService } from '../my-profile-service/my-profile.service';
import { MyProfile } from '../my-profile-class';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  repos : Repo []
  myProfile  : MyProfile
  constructor(private getReposByUserNameService: GetReposByUsernameService, private myProfileService: MyProfileService ) {
    this.repos = []
    this.myProfile = new MyProfile('', '')
   }

  async ngOnInit(){
    await this.getReposByUserNameService.getReposByUserName("nancyjamescoding")
    await this.myProfileService.getMyProfile('nancyjamescoding')
    this.myProfile =  new MyProfile(this.myProfileService.myProfile.avatarUrl, this.myProfileService.myProfile.userName)
    
    this.getReposByUserNameService.repos.forEach((repo: any, index: number) => {
      this.repos.push(new Repo(repo.name, repo.description))
    });
  }
}
