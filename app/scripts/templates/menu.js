import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import itemCollection from '../collections/itemcollection';
import orderCollection from '../collections/ordercollection';
import orderList from '../templates/order';
import nav from '../templates/nav';
import order1 from '../models/ordermodel';

window.itemCollection = itemCollection;

function renderMenuItems(itemType) {
    let menuList = $(`<section class="menu-container">
    <h2>Our Menu</h2>
    <h3 class="itemType-title">${itemType}</h3>
    <ul class="menu-descriptions">
    </ul>
  </section>
  <aside>
  </aside>`);
    $.ajax({
        url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',
        success: function(response) {
            response[itemType].forEach(function(item) {
                let menuItem = $(`<li class="item-title">${item.item}</li>
                                  <li class="item-price">$${item.price}</li>
                                  <li class="item-description">${item.description}</li>
                                  <input class="addItem" type="button" data-id="${item.id}" value="Add to order">
                                  `);

                // if (itemType === 'Beer') {
                //   let style = $(`<li>${item.style}</li>`);
                //   menuItem.append(style);
                // }
                $('.container').empty().append(nav).append(menuList);
                $('.menu-descriptions').append(menuItem);
                $('aside').append(orderList);
                itemCollection.add(item);
            });
            
            $('.addItem').on('click', function() {
                let id = $(this).data('id');
                console.log(id);
              //I need to grab the data that I clicked on title and price and add it to the order box
              //use id to grab it
              //run renderOrder function?
              // renderOrder(id);
            });
      }
});
}

export default renderMenuItems;
