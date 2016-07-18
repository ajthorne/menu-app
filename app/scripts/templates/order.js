import $ from 'jquery';
import Backbone from 'backbone';
import orderCollection from '../collections/ordercollection';
import order1 from '../models/ordermodel';

// function renderOrder (id) {
  // console.log(item);
  let orderList = $(`
    <h2>Your Order</h2>
    <ol class="order-list">
      <li class="order-item"></li>
    </ol>
    <p>Tax: $0</p>
    <p>Total: $0</p>
    <input type="button" name="name" value="Order now!">
    `);

    // $('aside').append(orderList);

        // orderCollection.save({
          // success: function(response) {
            // console.log('posted to server!');
            // router.navigate('confirmation', {trigger: true});
          // },
          // error: function () {
            // console.log('failed adding order');
          // }
        // });
    // });
// }
export default orderList;
