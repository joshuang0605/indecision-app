class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }
    render() {
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
            {this.state.visibility && (
                <div>
                    <p>This is details</p>
                </div>
            )}
        </div>
        )
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = ! visibility;
//     render()
// }

// const toggleDetails = () => {
//     console.log('p')
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
        // <div>
        //     <h1>Visibility Toggle</h1>
        //     <button onClick={toggleVisibility}>
        //     {visibility ? 'Hide details' : 'Show details'}
        //     </button>
        //     {visibility && (
        //         <div>
        //             <p>This is details</p>
        //         </div>
        //     )}
        // </div>
//     );
//     ReactDOM.render(template, appRoot);
// }
// render();