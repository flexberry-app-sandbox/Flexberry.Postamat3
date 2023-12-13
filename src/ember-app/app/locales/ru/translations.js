import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPostamat3ЛогистикаLForm from './forms/i-i-s-postamat3-логистика-l';
import IISPostamat3ПользовательLForm from './forms/i-i-s-postamat3-пользователь-l';
import IISPostamat3ПостаматLForm from './forms/i-i-s-postamat3-постамат-l';
import IISPostamat3СлужбаДоставкиLForm from './forms/i-i-s-postamat3-служба-доставки-l';
import IISPostamat3ТранзакцияLForm from './forms/i-i-s-postamat3-транзакция-l';
import IISPostamat3ЛогистикаEForm from './forms/i-i-s-postamat3-логистика-e';
import IISPostamat3ПользовательEForm from './forms/i-i-s-postamat3-пользователь-e';
import IISPostamat3ПостаматEForm from './forms/i-i-s-postamat3-постамат-e';
import IISPostamat3СлужбаДоставкиEForm from './forms/i-i-s-postamat3-служба-доставки-e';
import IISPostamat3ТранзакцияEForm from './forms/i-i-s-postamat3-транзакция-e';
import IISPostamat3ЛогистикаModel from './models/i-i-s-postamat3-логистика';
import IISPostamat3ПользовательModel from './models/i-i-s-postamat3-пользователь';
import IISPostamat3ПостаматModel from './models/i-i-s-postamat3-постамат';
import IISPostamat3ПосылкаModel from './models/i-i-s-postamat3-посылка';
import IISPostamat3СлужбаДоставкиModel from './models/i-i-s-postamat3-служба-доставки';
import IISPostamat3ТранзакцияModel from './models/i-i-s-postamat3-транзакция';
import IISPostamat3ЯчейкаModel from './models/i-i-s-postamat3-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postamat3-логистика': IISPostamat3ЛогистикаModel,
    'i-i-s-postamat3-пользователь': IISPostamat3ПользовательModel,
    'i-i-s-postamat3-постамат': IISPostamat3ПостаматModel,
    'i-i-s-postamat3-посылка': IISPostamat3ПосылкаModel,
    'i-i-s-postamat3-служба-доставки': IISPostamat3СлужбаДоставкиModel,
    'i-i-s-postamat3-транзакция': IISPostamat3ТранзакцияModel,
    'i-i-s-postamat3-ячейка': IISPostamat3ЯчейкаModel
  },

  'application-name': 'Postamat3',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Postamat3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postamat3',
          title: 'Postamat3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        postamat3: {
          caption: 'Postamat3',
          title: 'Postamat3',
          'i-i-s-postamat3-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postamat3-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-postamat3-транзакция-l': {
            caption: 'Транзакция',
            title: ''
          },
          'i-i-s-postamat3-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-postamat3-логистика-l': {
            caption: 'Логистика',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-postamat3-логистика-l': IISPostamat3ЛогистикаLForm,
    'i-i-s-postamat3-пользователь-l': IISPostamat3ПользовательLForm,
    'i-i-s-postamat3-постамат-l': IISPostamat3ПостаматLForm,
    'i-i-s-postamat3-служба-доставки-l': IISPostamat3СлужбаДоставкиLForm,
    'i-i-s-postamat3-транзакция-l': IISPostamat3ТранзакцияLForm,
    'i-i-s-postamat3-логистика-e': IISPostamat3ЛогистикаEForm,
    'i-i-s-postamat3-пользователь-e': IISPostamat3ПользовательEForm,
    'i-i-s-postamat3-постамат-e': IISPostamat3ПостаматEForm,
    'i-i-s-postamat3-служба-доставки-e': IISPostamat3СлужбаДоставкиEForm,
    'i-i-s-postamat3-транзакция-e': IISPostamat3ТранзакцияEForm
  },

});

export default translations;
