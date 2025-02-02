let CartItem = function(title, count, price, image) {
    this.$removeButton = new Button('Del');
    this.$template = $('<div/>')
        .addClass('uk-card uk-card-default')
        .append(
            $('<div/>')
                .addClass('uk-grid-small uk-flex-middle')
                .attr('uk-grid', '')
                .append(
                    $('<div/>')
                        .addClass('uk-width-auto')
                        .append(
                            new Image('uk-border-circle', image)
                            .attr({
                                width: '40',
                                height: '40'
                            })
                        ))
                .append($('<div/>')
                        .addClass('uk-width-expand')
                        .append(new Heading(3, title, 'uk-card-title uk-margin-remove-bottom'))
                        .append(new Paragraph(count))
                        .append(new Paragraph(price))
                        .append(new Paragraph(size))
                        .append(this.$removeButton)
                ));
    this.initEvents();
    return this.$template;
};

CartItem.prototype = {
    initEvents: function () {
        this.$removeButton.on('click', (e) => {
            e.preventDefault();
            let key = window.cart.getIndexByKey($(e.target).siblings('.uk-card-title').text());
            window.cart.removeItemByKey(key);
            window.cart.updateCart();
        })
    }
};