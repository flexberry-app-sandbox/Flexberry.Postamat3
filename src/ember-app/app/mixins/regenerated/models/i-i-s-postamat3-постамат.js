import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-postamat3-статусы'),
  службаДоставки: DS.belongsTo('i-i-s-postamat3-служба-доставки', { inverse: null, async: false }),
  ячейка: DS.hasMany('i-i-s-postamat3-ячейка', { inverse: 'постамат', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-postamat3-постамат.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat3-постамат.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat3-постамат.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  службаДоставки: {
    descriptionKey: 'models.i-i-s-postamat3-постамат.validations.службаДоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ячейка: {
    descriptionKey: 'models.i-i-s-postamat3-постамат.validations.ячейка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПостаматE', 'i-i-s-postamat3-постамат', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-postamat3-служба-доставки', 'Служба доставки', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    ячейка: hasMany('i-i-s-postamat3-ячейка', 'Ячейка', {
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
    })
  });

  modelClass.defineProjection('ПостаматL', 'i-i-s-postamat3-постамат', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-postamat3-служба-доставки', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
