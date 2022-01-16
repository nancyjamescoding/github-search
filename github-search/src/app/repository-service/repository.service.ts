import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repo } from '../repo';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  repo :  Repo
  reposByUserNameError: Boolean

  constructor(private http:HttpClient) {
    this.repo = new Repo('', '')
    this.reposByUserNameError = true
   }

  getRepoByRepoName(repoName:string, repoOwnerName: string) {
    let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<any>(`${environment.baseUrl}/repos/${repoOwnerName}/${repoName}`, 
        {
          headers: new HttpHeaders().set('Authorization', `token ${environment.apiKey}`),
        }
      ).toPromise().then(response => {
        this.repo = new Repo(response.name, response.description)
        resolve()
      },
    error=>{
        this.reposByUserNameError = true
        reject(error)
      })
    })
    return promise
  }

}

