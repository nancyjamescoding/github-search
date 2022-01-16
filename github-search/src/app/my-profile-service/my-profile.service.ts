import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MyProfile } from '../my-profile-class';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  myProfile : MyProfile
  myProfileError : Boolean
  constructor(private http:HttpClient) {
      this.myProfile = new MyProfile('', '')
      this.myProfileError = false
   }

  getMyProfile(userName:string) {
    let promise = new Promise<void>((resolve,reject) => {
      this.http.get<any>(`${environment.baseUrl}/users/${userName}`, 
        {
          headers: new HttpHeaders().set('Authorization', `token ${environment.apiKey}`),
        }
      ).toPromise().then(response => {
        this.myProfile = new MyProfile(response.avatar_url, response.name)
        resolve()
      },
    error=>{
        this.myProfileError = true
        reject(error)
      })
    })
    return promise
  }
}
