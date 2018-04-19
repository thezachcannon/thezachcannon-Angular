import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CodeService {

  githubURL = 'https://api.github.com'

  constructor(private http: HttpClient) { }

  getRepos(){
    return this.http.get(this.githubURL + '/users/thezachcannon/repos')
  }
  
  getMyInfo(){
    return this.http.get(this.githubURL + '/users/thezachcannon')
  }
}
