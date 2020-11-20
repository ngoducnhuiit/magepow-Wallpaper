define(['jquery'], function ($) {
    'use strict';
    return function (widget) {
        var globalOptions = {
            productId: null,
            priceConfig: null,
            prices: {},
            priceTemplate: '<span class="price"><%- data.formatted %>/m²</span>'
        };

        $.widget('mage.priceBox', widget, {
            options: globalOptions
        });
        return $.mage.priceBox;
    }
});
