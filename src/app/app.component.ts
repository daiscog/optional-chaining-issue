import { Component } from '@angular/core';

interface Foo {
  value: string;
}

@Component({
  selector: 'app-root',
  // When using optional chaining in a template, `foo?.value` is null, not undefined
  template: `
    <h1>TypeScript evaluation</h1>
    <p>value is null: <code>{{value === null}}</code></p>
    <p>value is undefined: <code>{{value === undefined}}</code></p>

    <h1>Template evaluation</h1>
    <p>value is null: <code>{{foo?.value === null}}</code></p>
    <p>value is undefined: <code>{{foo?.value === undefined}}</code></p>

    <h1>Input binding</h1>
    <p style="color: #666">
      With strict template type-checking, optional-chaining allows us to bind to an input of
      type <code>string | undefined</code> even though the template compiler provides a value
      of type <code>string | null</code>.
    </p>
    <app-other
      [value]="foo?.value"
    ></app-other>
  `,
})
export class AppComponent {
  foo: Foo | undefined;

  get value(): string | undefined {
    // When using optional chaining in typescript, `foo?.value` is undefined, as expected
    return this.foo?.value;
  }
}
