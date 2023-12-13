import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.postamat3.caption'),
          title: i18n.t('forms.application.sitemap.postamat3.title'),
          children: [{
            link: 'i-i-s-postamat3-постамат-l',
            caption: i18n.t('forms.application.sitemap.postamat3.i-i-s-postamat3-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat3.i-i-s-postamat3-постамат-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-postamat3-пользователь-l',
            caption: i18n.t('forms.application.sitemap.postamat3.i-i-s-postamat3-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat3.i-i-s-postamat3-пользователь-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-postamat3-транзакция-l',
            caption: i18n.t('forms.application.sitemap.postamat3.i-i-s-postamat3-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat3.i-i-s-postamat3-транзакция-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-postamat3-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.postamat3.i-i-s-postamat3-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat3.i-i-s-postamat3-служба-доставки-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-postamat3-логистика-l',
            caption: i18n.t('forms.application.sitemap.postamat3.i-i-s-postamat3-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat3.i-i-s-postamat3-логистика-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})