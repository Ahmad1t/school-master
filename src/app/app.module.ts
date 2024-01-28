import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { ToolbarComponent } from './components/main/toolbar/toolbar.component';
import { ToastrModule } from 'ngx-toastr';
import { HighlightDirective } from './core/directives/highlight.directive';
import { DemoPipe } from './core/pipes/demo.pipe';
import { SquarePipe } from './core/pipes/square.pipe';
import { ConfirmationDialogComponent } from './shared/components/confirmation-dialog/confirmation-dialog.component';
import { PersonDetailsComponent } from './components/person/person-details/person-details.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonManagementComponent } from './components/person/person-management/person-management.component';
import { DateComponent } from './components/date/date.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { MultilingualComponent } from './multilingual/multilingual.component';
import { TranslatePipe } from './core/pipes/translate.pipe'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatStepperModule} from '@angular/material/stepper';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    DashboardComponent,
    SidebarComponent,
    ToolbarComponent,
    HighlightDirective,
    DemoPipe,
    SquarePipe,
    ConfirmationDialogComponent,
    PersonDetailsComponent,
    PersonManagementComponent,
    DateComponent,
    MyaccountComponent,
    MultilingualComponent,
    TranslatePipe
    
  ],
  imports: [
    AppRoutingModule,
    ToastrModule.forRoot(
      {
        timeOut: 10000
      }
    ),
    MatProgressSpinnerModule,
    MatStepperModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    SharedModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
