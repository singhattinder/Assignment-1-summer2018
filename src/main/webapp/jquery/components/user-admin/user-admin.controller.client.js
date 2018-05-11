//IFFE immediately invoked function expression

(function f() {

    jQuery(init);

    function init() {
        var h1 = jQuery('h1');
        h1.css('color', 'red');
        h1.html("USER ADMINITRATION!");

    }

})();

