// import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
// import {User} from '../user';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//   constructor(private router: Router) { }
//   ngOnInit(): void {
//   }

//   submitted =false;
//   model =new User(4,'','');

//   onSubmit()
//   {
//     this.submitted=true;
//     //alert(JSON.stringify(this.model));
//     this.router.navigate(['/Topic']);
//   }

//   newUser()
//   {
//     this.model=new User(42,'','');
//   }

// }


import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  isUsernameValid: boolean = true;
  error: any = null;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService
      .errorSubject
      .subscribe(errorMessage => {
        this.error = errorMessage;
      });
  }

  validateUsername(): void {
    const pattern = RegExp(/^[\w-.]*$/);
    if (pattern.test(this.username)) {
      this.isUsernameValid = true;
    } else {
      this.isUsernameValid = false;
    }
  }

  onKey(event: any, type: string) {
    if (type === 'username') {
      this.username = event.target.value;
      this.validateUsername();
    } else if (type === 'password') {
      this.password = event.target.value;
    }
  }

  onSubmit() {
    if (this.isUsernameValid) {
      this.loginService
        .login(this.username, this.password);
    }
  }
}
