import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_auth/login/login.component';
import { ForgotPasswordComponent } from './_auth/forgot-password/forgot-password.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AccessControlComponent } from './dashboard/access-control/access-control.component';
import { ReportComponent } from './dashboard/report/report.component';
import { HeaderComponent } from './dashboard/component/header/header.component';
import { SidebarComponent } from './dashboard/component/sidebar/sidebar.component';
import { EvaluateComponent } from './dashboard/evaluate/evaluate.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LoadingComponent } from './component/loading/loading.component';
import { UsersComponent } from './dashboard/users/users.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {  PermissionsService} from "./_guard/auth-guard.guard";
import {MatMenuModule} from '@angular/material/menu';
import { LessonPlanComponent } from './dashboard/lesson-plan/lesson-plan.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { ModelConstructivistComponent } from './dashboard/model-constructivist/model-constructivist.component';
import { BehavioristComponent } from './dashboard/behaviorist/behaviorist.component';
import { ExperientialComponent } from './dashboard/experiential/experiential.component';
import { AssessmentEvaluateComponent } from './dashboard/assessment-evaluate/assessment-evaluate.component';
import { ModelConstructivistAssessmentEvaluateComponent } from './dashboard/model-constructivist-assessment-evaluate/model-constructivist-assessment-evaluate.component';
import { BehavioristAssessmentEvaluateComponent } from './dashboard/behaviorist-assessment-evaluate/behaviorist-assessment-evaluate.component';
import { ExperientialAssessmentEvaluateComponent } from './dashboard/experiential-assessment-evaluate/experiential-assessment-evaluate.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import { BehavioristCreateComponent } from './dashboard/behaviorist-create/behaviorist-create.component';
import { ExperientialCreateComponent } from './dashboard/experiential-create/experiential-create.component';
import { ConstructivistCreateComponent } from './dashboard/constructivist-create/constructivist-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    LayoutComponent,
    HomeComponent,
    ProfileComponent,
    AccessControlComponent,
    ReportComponent,
    HeaderComponent,
    SidebarComponent,
    EvaluateComponent,
    PageNotFoundComponent,
    LoadingComponent,
    UsersComponent,
    LessonPlanComponent,
    ModelConstructivistComponent,
    BehavioristComponent,
    ExperientialComponent,
    AssessmentEvaluateComponent,
    ModelConstructivistAssessmentEvaluateComponent,
    BehavioristAssessmentEvaluateComponent,
    ExperientialAssessmentEvaluateComponent,
    BehavioristCreateComponent,
    ExperientialCreateComponent,
    ConstructivistCreateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatTableModule,
    MatSidenavModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTabsModule,
    MatRadioModule,
    MatExpansionModule

  ],
  providers: [CookieService,PermissionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
