let visibility = false;

const toggleVisibility = () => {
    visibility = ! visibility;
    render()
}

const toggleDetails = () => {
    console.log('p')
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
            {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>This is details</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
}
render();