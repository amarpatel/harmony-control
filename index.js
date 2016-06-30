/* jshint esnext: true */

// Add IFTTT api key as query param `apiKey`

$(() => {
    const queryValues = parseURLQuery(),
        apiKey = queryValues.apiKey;

    $('.container').on('click', 'button', (e) => {
        const $node = $(e.currentTarget),
            actionName = $node.data('name'),
            $iframe = $('<iframe>', {
                src: `https://maker.ifttt.com/trigger/${ actionName }/with/key/${ apiKey }`
            });

        $iframe.on('load', function (e) {
            $iframe
                .animate({opacity: 1})
                .delay(500)
                .animate({opacity: 0}, 750, () => {
                    $('iframe').remove();
                });
        });

        $('.status-content').append($iframe);
    });
});