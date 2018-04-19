import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../services/code.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  myInfo
  myRepos
  gitCollapsed = true
  errors = []
  personalCollapsed = false

  constructor(private _codeService: CodeService ) { }

  ngOnInit() {
    this.getMyInfo();
    this.getMyRepos();
  }

  getMyRepos(){
    this._codeService.getRepos().subscribe(
      repos => {
        this.myRepos = repos;
      },
      err => {
        this.errors.push(err)
      },
    )
  }
  getMyInfo(){
    this._codeService.getMyInfo().subscribe(
      data => {
        console.log(data)
        this.myInfo = data;
      },
      err =>{
        console.log(err)
        this.errors.push(err)
      },
      () => console.log('done loading code')
    )
    
  }


}
