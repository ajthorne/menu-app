import Backbone from 'backbone';
import Item from '../models/itemmodel';

const Items = Backbone.Collection.extend({
  model: Item,
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json'
});

let itemCollection = new Items();

export default itemCollection;
