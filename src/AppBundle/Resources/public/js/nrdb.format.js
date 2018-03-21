(function (format, $) {

    format.cost = function (card) {
        return card.cost === null ? 'X' : card.cost;
    };

    format.type = function (card) {
        var type = '<span class="card-type">' + card.type.name + '</span>';
        if (card.keywords)
            type += '<span class="card-keywords">: ' + card.keywords + '</span>';
	if (card.gold)
            type += ' &middot; <span class="card-prop"> Gold: ' + card.gold + '</span>';
	if (card.rank)
            type += ' &middot; <span class="card-prop"> Rank: ' + card.rank + '</span>';
	if (card.life)
            type += ' &middot; <span class="card-prop"> Life: ' + card.life + '</span>';
        if (card.power)
            type += ' &middot; <span class="card-prop"> Power: ' + card.power + '</span>';
        if (card.defense)
            type += ' &middot; <span class="card-prop"> Defense: ' + card.defense + '</span>';
        return type;
    };

    format.text = function (card) {
        var text = card.text || '';

        text = text.replace(/\[subroutine\]/g, '<span class="icon icon-subroutine"></span>');
        text = text.replace(/\[credit\]/g, '<span class="icon icon-credit"></span>');
        text = text.replace(/\[trash\]/g, '<span class="icon icon-trash"></span>');
        text = text.replace(/\[click\]/g, '<span class="icon icon-click"></span>');
        text = text.replace(/\[recurring-credit\]/g, '<span class="icon icon-recurring-credit"></span>');
        text = text.replace(/\[mu\]/g, '<span class="icon icon-mu"></span>');
        text = text.replace(/\[link\]/g, '<span class="icon icon-link"></span>');
        text = text.replace(/\[anarch\]/g, '<span class="icon icon-anarch"></span>');
        text = text.replace(/\[criminal\]/g, '<span class="icon icon-criminal"></span>');
        text = text.replace(/\[shaper\]/g, '<span class="icon icon-shaper"></span>');
        text = text.replace(/\[jinteki\]/g, '<span class="icon icon-jinteki"></span>');
        text = text.replace(/\[haas-bioroid\]/g, '<span class="icon icon-haas-bioroid"></span>');
        text = text.replace(/\[nbn\]/g, '<span class="icon icon-nbn"></span>');
        text = text.replace(/\[weyland-consortium\]/g, '<span class="icon icon-weyland-consortium"></span>');

        text = text.replace(/<trace>([^<]+) ([X\d]+)<\/trace>/g, '<strong>$1<sup>$2</sup></strong>–');
        text = text.replace(/<errata>(.+)<\/errata>/, '<em><span class="glyphicon glyphicon-alert"></span> $1</em>');

        text = text.split("\n").join('</p><p>');

        return '<p>' + text + '</p>';
    };

})(NRDB.format = {}, jQuery);
