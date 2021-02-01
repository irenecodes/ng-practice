export class Item {
    static nextId = 0;
  
    static items: Item[] = [
      new Item(
        null,
        'Teapot',
        'stout'
      ),
      new Item(1, 'Lamp', 'bright'),
      new Item(2, 'Phone', 'slim' ),
      new Item(3, 'Television', 'vintage' ),
      new Item(4, 'Fishbowl')
    ];
  
  
    constructor(
      public id?: number,
      public name?: string,
      public feature?: string,
      public url?: string,
      public rate = 100,
      ) {
      this.id = id ? id : Item.nextId++;
    }
  
    clone(): Item {
      return Object.assign(new Item(), this);
    }
  }
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license

  .
  .
  .
  The MIT License

Copyright (c) 2010-2020 Google LLC. http://angular.io/license

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */