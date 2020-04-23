import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReviewComponent } from './review.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
    {
        path: '',
        component: ReviewComponent,
        children: [
            {
                path: 'questionnaire',
                component: QuestionnaireComponent,
            },
            {
                path: 'settings',
                component: SettingsComponent,
            }
        ]
    }
];

/**
 * @NgModule is for import routes to router module
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReviewRoutingModule { }
