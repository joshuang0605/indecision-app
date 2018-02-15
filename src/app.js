console.log('running');

// JSX = JavaScript XML
var appObject = {
    title: 'Budget App',
    subtitle: 'This is budget app'
}

var template = (
    <div>
        <h1>{appObject.title}</h1>
        <p>{appObject.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item teo</li>
        </ol>
    </div>
);



var templateTwo = (
    <div>
        <h1>Joshua Long</h1>
        <p>Age: 24</p>
        <p>Location: Auckland, NZ</p>
    </div>
);
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);
