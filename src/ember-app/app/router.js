import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-postamat3-логистика-l');
  this.route('i-i-s-postamat3-логистика-e',
  { path: 'i-i-s-postamat3-логистика-e/:id' });
  this.route('i-i-s-postamat3-логистика-e.new',
  { path: 'i-i-s-postamat3-логистика-e/new' });
  this.route('i-i-s-postamat3-пользователь-l');
  this.route('i-i-s-postamat3-пользователь-e',
  { path: 'i-i-s-postamat3-пользователь-e/:id' });
  this.route('i-i-s-postamat3-пользователь-e.new',
  { path: 'i-i-s-postamat3-пользователь-e/new' });
  this.route('i-i-s-postamat3-постамат-l');
  this.route('i-i-s-postamat3-постамат-e',
  { path: 'i-i-s-postamat3-постамат-e/:id' });
  this.route('i-i-s-postamat3-постамат-e.new',
  { path: 'i-i-s-postamat3-постамат-e/new' });
  this.route('i-i-s-postamat3-служба-доставки-l');
  this.route('i-i-s-postamat3-служба-доставки-e',
  { path: 'i-i-s-postamat3-служба-доставки-e/:id' });
  this.route('i-i-s-postamat3-служба-доставки-e.new',
  { path: 'i-i-s-postamat3-служба-доставки-e/new' });
  this.route('i-i-s-postamat3-транзакция-l');
  this.route('i-i-s-postamat3-транзакция-e',
  { path: 'i-i-s-postamat3-транзакция-e/:id' });
  this.route('i-i-s-postamat3-транзакция-e.new',
  { path: 'i-i-s-postamat3-транзакция-e/new' });
});

export default Router;
