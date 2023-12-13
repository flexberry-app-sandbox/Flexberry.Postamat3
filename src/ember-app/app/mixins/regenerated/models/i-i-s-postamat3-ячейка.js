import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЯчейки: DS.attr('number'),
  постамат: DS.belongsTo('i-i-s-postamat3-постамат', { inverse: 'ячейка', async: false }),
  посылка: DS.hasMany('i-i-s-postamat3-посылка', { inverse: 'ячейка', async: false })
});

export let ValidationRules = {
  номерЯчейки: {
    descriptionKey: 'models.i-i-s-postamat3-ячейка.validations.номерЯчейки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  постамат: {
    descriptionKey: 'models.i-i-s-postamat3-ячейка.validations.постамат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-postamat3-ячейка.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЯчейкаE', 'i-i-s-postamat3-ячейка', {
    номерЯчейки: attr('Номер ячейки', { index: 0 }),
    посылка: hasMany('i-i-s-postamat3-посылка', 'Посылка', {
      номер: attr('Номер', { index: 0 }),
      статус: attr('Статус', { index: 1 }),
      отправитель: attr('Отправитель', { index: 2 }),
      получатель: attr('Получатель', { index: 3 }),
      логистика: belongsTo('i-i-s-postamat3-логистика', 'Логистика', {
        информация: attr('Информация', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'информация' }),
      транзакция: belongsTo('i-i-s-postamat3-транзакция', 'Транзакция', {
        время: attr('Время', { index: 7, hidden: true })
      }, { index: 6, displayMemberPath: 'время' })
    })
  });
};
