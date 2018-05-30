import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content/thumbnail-basic', 'Integration | Component | content/thumbnail basic', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{content/thumbnail-basic}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#content/thumbnail-basic}}
      template block text
    {{/content/thumbnail-basic}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
