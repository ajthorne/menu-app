import $ from 'jquery';
import Backbone from 'backbone';
import order1 from '../models/ordermodel';
// import orderCollection from '../collections/ordercollection';
import router from '../router';
import nav from './nav';

function renderConfirmation(item) {
  console.log(order1);

  router.navigate('confirm', {trigger: true});

  let menuOrder = $(`
    <div>
    <h2>Your Final Order</h2>
    <ol class="final-order-list">
    </ol>
    <p>Total: $${order1.get('total').toFixed(2)}</p>
    <input class="homeBtn" type="button" value="Start a New Order"/>
    </div>`);

    order1.get('items').forEach(function(item, i, arr) {
      // console.log(menuOrder.find('.final-order-list'));
      let itemsAdded = $(`<li class="order-item">${item.item}</li>`);
      menuOrder.find('.final-order-list').append(itemsAdded);
    });

    $('.container').empty().append(nav).append(menuOrder);

    $('.homeBtn').on('click', function() {
      console.log('Start your new order!');
      router.navigate('beer', {trigger: true});
    });

      // orderCollection.create({
      //   success: function(response) {
      //     console.log('Your order has been submitted!');
      //     router.navigate('confirmation', {trigger: true});
      //   },
      //   error: function () {
      //     console.log('failed adding order');
      //   }
      // });
}

export default renderConfirmation;
