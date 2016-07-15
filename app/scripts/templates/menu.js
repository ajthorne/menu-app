import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import itemCollection from '../collections/itemcollection';
import orderList from '../templates/order';
import nav from '../templates/nav';

window.itemCollection = itemCollection;

function renderMenuItems(itemType) {
    let menuList = $(`<section class="menu-container">
    <h2>Our Menu</h2>
    <h3>${itemType}</h3>
    <ul class="menu-descriptions">
    </ul>
  </section>
  <aside>
  </aside>`);
    $.ajax({
        url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',
        success: function(response) {
            response[itemType].forEach(function(item) {
                let menuItem = $(`<li>${item.item}</li>
                                <li>${item.price}</li>
                                <li>${item.description}</li>`);

                $('.container').empty().append(nav).append(menuList);
                $('.menu-descriptions').append(menuItem);
                $('aside').append(orderList);

                itemCollection.add(item);
            });
        }
    });
}

export default renderMenuItems;
