# Optional Chaining Issue

Demonstrates the difference between use of optional chaining in Angular templates vs in typescript code and
how the `strictTemplates` angular compiler option is unaware of the difference.

## Description

The [src/app/other.component.ts](./src/app/other.component.ts) declares an input of type `string | undefined`.

The [src/app/app.component.ts](./src/app/app.component.ts) uses optional chaining in its HTML template to assign
a value to this input, and the left-hand side of the `?.` operator is undefined.  However, the  input is assigned
the value `null`, **not** `undefined`.

This is strictly incompatible with the type declared for the input.  Furthermore, changing the type of the Input
to `string | null` results in a type error in app-component:

     Type 'string | undefined' is not assignable to type 'string | null'.
       Type 'undefined' is not assignable to type 'string | null'

            [value]="foo?.value"
             ~~~~~
~~~~
