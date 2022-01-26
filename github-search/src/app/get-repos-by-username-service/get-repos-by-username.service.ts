import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { apiKey } from 'src/config/clients-secret';

@Injectable({
  providedIn: 'root'
})
export class GetReposByUsernameService {

  repos : []
  reposByUserNameError: Boolean

  constructor(private http:HttpClient) {
    this.repos = []
    this.reposByUserNameError = true
   }

  getReposByUserName(userName:string) {
    let promise = new Promise<void>((resolve,reject) => {
      this.http.get<any>(`${environment.baseUrl}/users/${userName}/repos`, 
        {
          headers: new HttpHeaders().set('Authorization', `token ${apiKey}`),
        }
      ).toPromise().then(response => {
        this.repos = response
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