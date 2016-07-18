import Backbone from 'backbone';
import Order from '../models/ordermodel';

const Orders = Backbone.Collection.extend({
  model: Order,
  url: 'http://tiny-za-server.herokuapp.com/collections/amandamenu'
});

let orderCollection = new Orders();

export default orderCollection;
