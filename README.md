# ember-bootstrap-undefined-trigger-element

The issue here for ember-bootstrap 4.4.0 is basically a DOM node order/timing issue. This occurs if your use case needs to render the contextual help (Ex: BsTooltip) earlier in DOM order than the trigger element. Some users may not have the ability to control their DOM order in all circumstances, and this would be a breaking change for them in this circumstance upgrading from 4.3.0 to 4.4.0

previously in 4.3.0, we kicked off `getTriggerTargetElement` in `didInsertElement` https://github.com/kaliber5/ember-bootstrap/blob/v4.3.0/addon/components/bs-contextual-help.js#L726, this allowed the full page to render before firing.

Now with 4.4.0, we kick off `getTriggerTargetElement` in the `did-insert` modifier named `setup` https://github.com/kaliber5/ember-bootstrap/blob/v4.4.0/addon/components/bs-contextual-help.js#L693, this fires inline at the exact time the modifier is evaluated so anything waiting to be rendered in DOM later in the page will not be rendered yet and will throw

```
Uncaught (in promise) Error: Assertion Failed: Could not find trigger element for tooltip/popover component
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-bootstrap-undefined-trigger-element`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
