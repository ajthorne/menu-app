import $ from 'jquery';
import Backbone from 'backbone';
import moment from 'moment';

const Order = Backbone.Model.extend({
    urlRoot: 'http://tiny-za-server.herokuapp.com/collections/amandamenu',
    idAttribute: '_id',
    timestamp: moment().format('MMM Do YY, h:mm:ss a'),
    items: [],
    total: 0,
    tax: 0
});

Order.prototype.calculateTax = function() {
};

Order.prototype.total = function() {
};

let order1 = new Order();

export default order1;
