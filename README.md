# inquirer-test

Testing npm inquirer module.

## Setup:

1. <kbd>$ npm install</kbd>
1. <kbd>$ npm start</kbd>

This will run index.js which will ask a few "random" questions and dump the output to stdout.
The questions are defined and exported in ./questions.js, but configured in ./index.js.

## Sample output:

```sh
$ npm start

> inquisitor-test@1.0.0 start /Users/pdehaan/dev/github/pdehaan/inquirer-test
> node index

? WebExtension id: testing-1-2-3
? Shield (or Pioneer): shield
? Inform Strategy and Insights team about your project: No
? Choose additional libraries: shield-study-addon-utils

{ id: 'testing-1-2-3',
  xtype: 'shield',
  tellSI: false,
  libraries: [ 'shield-study-addon-utils' ] }
```
