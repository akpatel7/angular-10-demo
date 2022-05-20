import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {AccountBalanceService} from './account-balance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  email = 'max@gmail.com';
  password = '1234';
  loggedIn: any;
  accountBalance: any;

  constructor(private authService: AuthService,
              private balanceService: AccountBalanceService) {
    this.authService.loggedIn.subscribe((loggedIn: any) => {
      this.loggedIn = loggedIn;
    });
    this.balanceService.accountBalance.subscribe((balance: any) => {
      this.accountBalance = balance;
    });
  }

  doLogin() {
    this.authService.doLogin(this.email, this.password);
  }

  doLogout() {
    this.authService.logout();
  }

  getBalance() {
    this.balanceService.getAccountBalance();
  }

}
