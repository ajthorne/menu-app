import $ from 'jquery';
import Backbone from 'backbone';
import moment from 'moment';

const Order = Backbone.Model.extend({
    urlRoot: 'http://tiny-za-server.herokuapp.com/collections/amandamenu',
    idAttribute: '_id',
    defaults: {
      timestamp: moment().format('MMM Do YY, h:mm:ss a'),
      items: [],
      total: 0,
      tax: 0
    },

    tax: function (item) {
      let addTax = (this.get('total') * 0.08);
      this.set('tax', addTax);
      console.log('Your Tax:', addTax);
    },

    total: function (item) {
      let firstTotal = this.get('total');
      let newTotal = firstTotal += ((item.get('price')));
      // console.log(newTotal);
      this.set('total', newTotal);
    },

    calculate: function() {
      let total = this.get('total');
      let tax = this.get('tax');
      let calculateTotal = total + tax;
      this.set('total', calculateTotal);
      console.log('Your Total:', calculateTotal);
    }
});

let order1 = new Order();

export default order1;
