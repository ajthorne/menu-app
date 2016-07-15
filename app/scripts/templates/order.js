import $ from 'jquery';
import Backbone from 'backbone';

  let orderList = $(`
    <h2>Your Order</h2>
    <ol>
      <li class="order-item"></li>
    </ol>
    <p>Tax:</p>
    <p>Total:</p>
    <input type="button" name="name" value="Order now!">
    `);

export default orderList;
