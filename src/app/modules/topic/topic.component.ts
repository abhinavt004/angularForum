import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  user:any = null;

  constructor(private loginService: LoginService,) { }

  ngOnInit(): void {
    this.loginService
      .userSubject
      .subscribe(user => {
        this.user = user;
      });
  }

}
