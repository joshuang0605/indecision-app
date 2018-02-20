console.log('running');

// JSX = JavaScript XML
const app = {
    title: 'Budget App',
    subtitle: 'This is budget app',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options(randomNum);

    console.log(randomNum)
};
// create "Remove All" button above list
// on click -> wipe out the array -> rerender

const user = {
    name: 'Joshua Long',
    age: 17,
    // location: 'Auckland'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
};

const appRoot = document.getElementById('app');

const numbers = [55, 120, 232]

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>app.subtitle</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0}onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
render();

