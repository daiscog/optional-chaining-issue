import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-other',
  template: `
    <p>value is null: <code>{{value === null}}</code></p>
    <p>value is undefined: <code>{{value === undefined}}</code></p>
  `
})
export class OtherComponent {
  // Changing the type of this input to `string | null` will cause a type error in app.component when strictTemplates is enabled
  // even though the component does actually provide null, not undefined, to this input.
  @Input() value: string | undefined;
  // @Input() value: string | null = null;
}
