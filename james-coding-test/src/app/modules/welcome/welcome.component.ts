import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  user: User;

  constructor(private router: Router, private authService: AuthService ) { }

  ngOnInit() {
    this.setObjects();
  }

  setObjects() {
    this.clearUserObj();
    this.user = { id: 0, name: '' };
  }

  clearUserObj() {
    this.authService.clearUser();
  }

  onSubmit() {
    this.authService.setUser(this.user);
    this.goTo('/app/questionnaire');
  }

  goTo(path) {
    this.router.navigateByUrl(path);
  }

}
