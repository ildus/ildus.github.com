$(function () {
    var converter = new Showdown.converter();
    var content = $('.content .text');
    var title = $('.content .title_text');

    var base_page = '/blog/'
    window.onpopstate = function(event) {
        set_state(event.state);
    };

    var content_block = $('.content');
    var articles_block = $('.articles');

    function set_state(state) {
        if (state) {
            if (state.location == 'articles') {
                articles_block.show();
                content_block.hide();
            }
            else if (state.location == 'article') {
                $.get(state.href, function (data) {
                    articles_block.hide();
                    content_block.show();
                    title.text(state.title);
                    content.html(converter.makeHtml(data));
                });
            }
        }
    }

    $('.articles a').bind("click", function (e) {
        e.preventDefault();

        var link = $(this);
        console.log(this.href);
        var state = {location: 'article', title: link.text(), href: this.href}
        history.pushState(state, "article", this.href);
        set_state(state);
        return false;
    });

    $('.back a').bind("click", function (e) {
        var state = {location: 'articles'};
        history.pushState(state, "main", "/blog/");
        set_state(state);
    })
})