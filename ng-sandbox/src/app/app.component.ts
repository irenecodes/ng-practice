import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Time to Practice Some Pipes';
  user = {
    userID: 1,
    firstName: 'Irene',
    lastName: 'Truong',
    todaysDate: new Date()
  }
  
  toggle = true;

  get formatDate() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  toggleDateFormat() {
    this.toggle = !this.toggle;
  }


  currencyConverter = {
    initialValue: 1
  }

  
  selectedProvince = 'Ontario'
  provinces = [
    {
      name: 'Alberta',
      taxPercentage: 5
    },
    {
      name: 'BC',
      taxPercentage: 12
    },
    {
      name: 'Manitoba',
      taxPercentage: 12
    },
    {
      name: 'NB',
      taxPercentage: 15
    },
    {
      name: 'NFL + Labrador',
      taxPercentage: 15
    },
    {
      name: 'NWT',
      taxPercentage: 5
    },
    {
      name: 'NS',
      taxPercentage: 15
    },
    {
      name: 'Nunavut',
      taxPercentage: 5
    },
    {
      name: 'Ontario',
      taxPercentage: 13
    },
    {
      name: 'PEI',
      taxPercentage: 15
    },
    {
      name: 'Quebec',
      taxPercentage: 14.975
    },
    {
      name: 'SK',
      taxPercentage: 11
    },
    {
      name: 'Yukon',
      taxPercentage: 5
    }
    
  ]


}

