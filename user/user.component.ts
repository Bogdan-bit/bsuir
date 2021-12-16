import { Component, OnInit } from '@angular/core';
import { Command } from 'selenium-webdriver';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  private id: string;
  private password: string;
  private mail: string;
  private name: string;
  private comand: Command;

  private approveAuthorization() {}
}
