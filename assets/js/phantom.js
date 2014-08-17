/*jslint browser:true, unparam:true*/
/*global $, FastClick*/

$(function () {

    'use strict';

    // Execute FastClick.js
    FastClick.attach(document.body);

    // Expanded article images
    $('article img').parent().addClass('article-image');

    // Custom transform and opacity modifier for Stellar.js
    $.stellar.positionProperty.transfade = {
        setPosition: function (element, newLeft, originalLeft, newTop, originalTop) {
            var distance = newTop - originalTop,
                rate = $('header').height() / 5;
            element.css('transform', 'translate3d(0, ' + distance + 'px, 0').css('opacity', 1 - (distance / rate));
        }
    };

    // Execute Stellar.js
    $.stellar({
        horizontalScrolling: false,
        positionProperty: "transfade",
        parallaxBackgrounds: false,
        verticalOffset: 90,
        hideDistantElements: false
    });

    // Social sharing links
    $('#twitter').click(function () {
        window.open(this.href, 'twitter-share', 'width=550,height=235');
        return false;
    });

    $('#facebook').click(function () {
        window.open(this.href, 'facebook-share', 'width=580,height=296');
        return false;
    });

    $('#google-plus').click(function () {
        window.open(this.href, 'google-plus-share', 'width=490,height=530');
        return false;
    });

});
