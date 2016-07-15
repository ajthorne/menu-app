import $ from 'jquery';
import Backbone from 'backbone';
import renderMenuItems from './templates/menu';
import itemCollection from './collections/itemcollection';

const Router = Backbone.Router.extend({
  routes: {
    beer: 'renderBeer',
    entrees: 'renderEntrees',
    games: 'renderGames',
    confirm: 'renderConfirmation',
    '/*': 'renderBeer'
  },

  renderBeer: function() {
    renderMenuItems('Beer');
    //
    // if (location.hash === 'beer') {
    //   $('h3').set('Beer');
    // }
  },

  renderEntrees: function() {
    renderMenuItems('entrees');
  },

  renderGames: function() {
    renderMenuItems('games');
  },

  renderConfirmation: function() {

  },
});

const router = new Router();

export default router;
