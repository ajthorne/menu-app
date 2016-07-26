import $ from 'jquery';
import Backbone from 'backbone';
import orderCollection from '../collections/ordercollection';
import order1 from '../models/ordermodel';
import renderConfirmation from './confirmation';

function renderOrder (item) {
  // console.log(item);
  let orderList = $(`
    <h2>Your Order</h2>
    <ol class="order-list">
    </ol>
    <p>Tax: $${order1.get('tax').toFixed(2)}</p>
    <p>Total: $${order1.get('total').toFixed(2)}</p>
    <input class="orderBtn" type="button" name="name" value="Order now!">
    `);

    order1.get('items').forEach(function(item, i, arr) {
      // console.log(item);
      let li = $(`<li class="order-item">${item.item}</li>`);
      orderList.filter('ol').append(li);
    });

    orderList.filter('.orderBtn').on('click', function (item) {
      console.log('Your order has been submitted!');
      renderConfirmation(item);
    });

    return orderList;
}
export default renderOrder;
