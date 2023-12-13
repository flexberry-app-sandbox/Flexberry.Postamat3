import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat3-постамат', 'Unit | Model | i-i-s-postamat3-постамат', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-postamat3-логистика',
    'model:i-i-s-postamat3-пользователь',
    'model:i-i-s-postamat3-постамат',
    'model:i-i-s-postamat3-посылка',
    'model:i-i-s-postamat3-служба-доставки',
    'model:i-i-s-postamat3-транзакция',
    'model:i-i-s-postamat3-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
