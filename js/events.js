var events = [];

function addEvent(title, start, url) {
    events.push({
        title: title,
        start: start,
        url: url
    });
}

$(function(){
    addEvent('Test', '2015-11-04T12:30:00', 'http://www.amazon.com');
});