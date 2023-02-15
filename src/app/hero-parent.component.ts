import { Component } from '@angular/core';

import { HEROES } from './hero';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{masterA}} controls {{heroes.length}} heroes</h2>

    <app-hero-child
      *ngFor="let hero of heroes"
      [heros]="hero"
      [masterB]="masterA">
    </app-hero-child>
  `,
})
export class HeroParentComponent {
  //import the HEROES array, then assign into heroes array variable
  heroes = HEROES;
  //assign the string Master into the variable master
  masterA = 'TEST';
}

//at export class define the value i want to pass to child
// then at the template, use the child selector to define the values that i want to pass over

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
