import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sidebarOpened: boolean = true;
  title: any;
 
  constructor(
    private authService: AuthService,private router: Router,public translate: TranslateService) {
    
    
    }
  
  isLoggedIn(): boolean{
    return this.authService.isAuthenticatedUser();
  }
  menuButtonClicked(){
    this.sidebarOpened = !this.sidebarOpened;
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
