import { NgModule } from '@angular/core';
import { ReviewRoutingModule } from './review.routing.module';
import { ReviewComponent } from './review.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  imports: [
    ReviewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    ReviewComponent,
    QuestionnaireComponent,
    SettingsComponent
  ],
})

export class ReviewModule {

}
