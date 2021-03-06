import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('forms/main-contact', 'Integration | Component | forms/main contact', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{forms/main-contact}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#forms/main-contact}}
      template block text
    {{/forms/main-contact}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
