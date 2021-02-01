import { Component } from '@angular/core';
import { Item } from './item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Irene\'s Sandbox';
  user = {
    userID: 1,
    firstName: 'Irene',
    lastName: 'Truong',
    todaysDate: new Date(),
    password: 'test'
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
  canSave =  true;
  isSpecial = true;
  isUnchanged = true;

  currentClasses: {};

  item: Item; // defined to demonstrate template context precedence
  items: Item[];

  currentItem: Item;

  


  ngOnInit() {
    this.resetItems();
    this.setCurrentClasses();
    // this.setCurrentStyles();
    // this.itemsNoTrackByCount = 0;
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }

  resetItems() {
    this.items = Item.items.map(item => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
  }

  
  // setCurrentStyles() {
  //   // CSS styles: set per current state of component properties
  //   this.currentStyles = {
  //     'font-style':  this.canSave      ? 'italic' : 'normal',
  //     'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
  //     'font-size':   this.isSpecial    ? '24px'   : '12px'
  //   };
  // }

  // for template driven form 
  onSubmitTemplateBased(user) {
    console.log(user);
  }


}

