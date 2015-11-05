var events = [];

function addEvent(title, start, url) {
    if ( url ) {
        events.push({
            title: title,
            start: start,
            url: url
        });
    } else {
        events.push({
            title: title,
            start: start
        });
    }
}

$(function(){
    addEvent('Test', '2015-11-04T12:30:00', 'http://www.amazon.com');
});