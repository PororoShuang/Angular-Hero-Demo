import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `,
})
export class HeroChildComponent {
  @Input() hero!: Hero;
  //the = '' part of the code is an initialization of the masterName property to an empty string in case no value is passed to it.
  @Input('masterS') masterName = 'test';
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
