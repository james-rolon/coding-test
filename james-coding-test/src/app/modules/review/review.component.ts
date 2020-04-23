import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  user: User;

  constructor(private authSerivce: AuthService) { }

  ngOnInit(): void {
    this.setObjects();
  }

  setObjects() {
    this.user = this.authSerivce.getUser();
  }

}
