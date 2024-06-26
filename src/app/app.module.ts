import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';
import { TeacherLeaderboardComponent } from './teacher-leaderboard/teacher-leaderboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { HeadLeaderboardComponent } from './head-leaderboard/head-leaderboard.component';
import { HeadDashboardComponent } from './head-dashboard/head-dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AllStudentsHighScoreComponent } from './head-dashboard/_component/all-students-high-score/all-students-high-score.component';
import { MostPlayersSectionComponent } from './head-dashboard/_component/most-players-section/most-players-section.component';
import { MostCoinCollectedComponent } from './head-dashboard/_component/most-coin-collected/most-coin-collected.component';
import { ColComponent } from './teacher-dashboard/col/col.component';
import { RowComponent } from './teacher-dashboard/row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    TeacherLeaderboardComponent,
    HeadLeaderboardComponent,
    HeadDashboardComponent,
    TeacherDashboardComponent,
    AllStudentsHighScoreComponent,
    MostPlayersSectionComponent,
    MostCoinCollectedComponent,
    ColComponent,
    RowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
