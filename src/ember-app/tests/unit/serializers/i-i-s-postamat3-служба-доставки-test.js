import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat3-служба-доставки', 'Unit | Serializer | i-i-s-postamat3-служба-доставки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-postamat3-служба-доставки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-postamat3-оплата',
    'transform:i-i-s-postamat3-состояние',
    'transform:i-i-s-postamat3-статус',
    'transform:i-i-s-postamat3-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
