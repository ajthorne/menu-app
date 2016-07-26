import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import itemCollection from '../collections/itemcollection';
import orderCollection from '../collections/ordercollection';
import renderOrder from '../templates/order';
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
                // let itemBtn = menuItem.filter('.addItem');
                // itemBtn[0].addEventListener('click', function(e) {
                //     console.log(item.item);
                //     console.log(item.price);
                // });
                $('.container').empty().append(nav).append(menuList);
                $('.menu-descriptions').append(menuItem);
                $('aside').html(renderOrder(item));
                itemCollection.add(item);

            });

            $('.addItem').on('click', function() {
                let id = $(this).data('id');
                let item = itemCollection.get(id);
                order1.set('items', order1.get('items').concat(item));
                //adding item to items array in model
                order1.total(item);
                order1.tax(item);
                order1.calculate(item);
                //math functions are defined in model
                order1.save();
                //saving order to server
                order1.on('change', function() {
                    $('aside').html(renderOrder(item));
                    //watching for change on order1
                    //if there is a change, it rerenders the list
                });
            });
        }
    });
}

export default renderMenuItems;
