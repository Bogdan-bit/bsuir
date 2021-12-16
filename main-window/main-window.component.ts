import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent {
  private authorizationWindow: AuthorizationWindow;
  private registrationWindow: RegistrationWindow;
  private userDataWindow: UserDataWindow;
  private joinInTeamWindow: JoinInTeamWindow;
  private mobileCoachWindow: MobileCoachWindow;
  
  public toShow() {}
  public createAuthorizationWindow() {}
  public createRegistrationWindow() {}
  public createUserDataWindow() {}
  public createsearchComandWindow() {}
  public createMobileCoachWindow() {}
}
