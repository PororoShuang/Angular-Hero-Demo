import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{heros.name}} says:</h3>
    <p>I, {{heros.name}}, am at your service, {{masterName}}.</p>
  `,
})
export class HeroChildComponent {
  @Input() heros!: Hero;
  //the = '' part of the code is an initialization of the masterName property to an empty string in case no value is passed to it.
  @Input('masterB') masterName = 'hello';
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
