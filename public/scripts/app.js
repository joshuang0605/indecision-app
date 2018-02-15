'use strict';

console.log('running');

// JSX = JavaScript XML
var appObject = {
    title: 'Budget App',
    subtitle: 'This is budget app'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObject.title
    ),
    React.createElement(
        'p',
        null,
        appObject.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item teo'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Joshua Long'
    ),
    React.createElement(
        'p',
        null,
        'Age: 24'
    ),
    React.createElement(
        'p',
        null,
        'Location: Auckland, NZ'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
