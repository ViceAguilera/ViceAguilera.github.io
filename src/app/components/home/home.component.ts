import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { AboutComponent } from '../about/about.component';
import { CurriculumComponent } from '../curriculum/curriculum.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';

const pages = [
  AboutComponent,
  CurriculumComponent,
  PortfolioComponent,
  ContactComponent
];

const modules = [
  MatIconModule, 
  MatTabsModule, 
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatRippleModule, 
  MatCardModule
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ...modules,
    ...pages
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  mail = 'vicente.aguilera1908@gmail.com'
  phone = '+56 9 7667 4794'
  location = 'Concepción, Chile'
  activateTab = 0;

  setActivateTab(index: number){
    this.activateTab = index;
  }
}
