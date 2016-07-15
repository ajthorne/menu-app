import $ from 'jquery';
import Backbone from 'backbone';

const Item = Backbone.Model.extend({
  urlRoot: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',
});

export default Item;
