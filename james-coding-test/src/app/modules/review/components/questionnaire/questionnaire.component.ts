import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth-service/auth.service';
import { User } from '../../../../models/user';
import { QuestionnaireService } from './service/questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  questionnaireForm: any;
  user: User;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private questService: QuestionnaireService) { }

  ngOnInit(): void {
    this.setObjects();
  }

  setObjects() {
    this.user = this.authService.getUser();
    this.questionnaireForm = this.formBuilder.group({
      howMuchILikeProgramming: [''],
      waysInWhichILikeProgramming: ['', Validators.required], // makes this field required.
    });
  }

  // convenience getters for easy access to form fields
  get questForm() { return this.questionnaireForm.controls; }
  get waysInWhich() { return this.questionnaireForm.get('waysInWhichILikeProgramming'); }

  onSubmit() {
    console.log(this.questionnaireForm);
    this.questService.logClickEvent();
  }

  numericChanged(event) {
    console.log(event);
    console.log('hit');
    this.questService.logNumericValueChange();
  }

}
