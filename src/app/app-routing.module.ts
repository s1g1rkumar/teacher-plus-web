import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LoginComponent } from './_auth/login/login.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ReportComponent } from './dashboard/report/report.component';
import { AccessControlComponent } from './dashboard/access-control/access-control.component';
import { UsersComponent } from './dashboard/users/users.component';
import { ForgotPasswordComponent } from './_auth/forgot-password/forgot-password.component';
import { authGuardGuard } from './_guard/auth-guard.guard';
import { LessonPlanComponent } from './dashboard/lesson-plan/lesson-plan.component';
import { EvaluateComponent } from './dashboard/evaluate/evaluate.component';
import { AssessmentEvaluateComponent } from './dashboard/assessment-evaluate/assessment-evaluate.component';
import { ModelConstructivistAssessmentEvaluateComponent } from './dashboard/model-constructivist-assessment-evaluate/model-constructivist-assessment-evaluate.component';
import { BehavioristAssessmentEvaluateComponent } from './dashboard/behaviorist-assessment-evaluate/behaviorist-assessment-evaluate.component';
import { ExperientialAssessmentEvaluateComponent } from './dashboard/experiential-assessment-evaluate/experiential-assessment-evaluate.component';
import { ExperientialCreateComponent } from './dashboard/experiential-create/experiential-create.component';
import { BehavioristCreateComponent } from './dashboard/behaviorist-create/behaviorist-create.component';
import { ConstructivistCreateComponent } from './dashboard/constructivist-create/constructivist-create.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        canActivate: [authGuardGuard],
        component: HomeComponent
      },
      {
        path: 'report',
        canActivate: [authGuardGuard],
        component: ReportComponent
      },
      {
        path: 'access-control',
        canActivate: [authGuardGuard],
        component: AccessControlComponent
      },
      {
        path: 'lesson-plan',
        canActivate: [authGuardGuard],
        component: LessonPlanComponent
      },
      {
        path: 'access-control',
        canActivate: [authGuardGuard],
        component: AccessControlComponent
      },
      {
        path: 'evaluate',
        canActivate: [authGuardGuard],
        component: EvaluateComponent
      },
      {
        path: 'users',
        canActivate: [authGuardGuard],
        component: UsersComponent
      },
      {
        path: 'evaluate/assessment-evaluate/:form_id',
        canActivate: [authGuardGuard],
        component: AssessmentEvaluateComponent
      },
      {
        path: 'evaluate/model-constructivist-assessment-evaluate/:form_id',
        canActivate: [authGuardGuard],
        component: ModelConstructivistAssessmentEvaluateComponent
      },
      {
        path: 'evaluate/behaviorist-assessment-evaluate/:form_id',
        canActivate: [authGuardGuard],
        component: BehavioristAssessmentEvaluateComponent
      },
      {
        path: 'evaluate/experiential-assessment-evaluate/:form_id',
        canActivate: [authGuardGuard],
        component: ExperientialAssessmentEvaluateComponent
      },
      {
        path: 'evaluate/create-experiential',
        canActivate: [authGuardGuard],
        component: ExperientialCreateComponent
      },
      {
        path: 'evaluate/create-behaviorist',
        canActivate: [authGuardGuard],
        component: BehavioristCreateComponent
      },
      {
        path: 'evaluate/create-model-constructivist',
        canActivate: [authGuardGuard],
        component: ConstructivistCreateComponent
      },
      {
        path: 'profile',
        canActivate: [authGuardGuard],

        component: ProfileComponent
      }
    ]
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
