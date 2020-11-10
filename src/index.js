import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";



class App extends React.Component {

     // This is how we initialize state = with Babel it's the same as using constructor
     state = { lat: null, errorMessage: '' };


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(

            // single line functions
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({errorMessage: err.message})

        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
            <div>Error: {this.state.errorMessage}</div>
            );
        }

        if (!this.state.errorMessage && this.state.lat) {
            return (
            <SeasonDisplay lat={this.state.lat} />
            )
        }

        return(
            <Spinner message={"Please accept the location request"}/>
        )
    }

    render () {

        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
        ;
    

       
    }
}

ReactDOM.render (
    <App />, document.querySelector("#root")
)














// const App = () => {

//     window.navigator.geolocation.getCurrentPosition (
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );

//     return <div>Hi there!</div>
// };

// class App extends React.Component {


//     // This is how we initialize state trough constructor
//     constructor(props){ 
//         super(props); //super is a reference to parent constructor function//

//         // THE ONLY TIME we do direct assignment to this.state!!!
//         this.state = { lat: null, errorMessage: '' };

//     }


//     componentDidMount() {
//         window.navigator.geolocation.getCurrentPosition(            

//             // bellow the stuffs (position and err) are called callback functions -> functions to be called in the future
//             (position) => {

//                 // THIS IS HOW WE UPDATE STATE!
//                 this.setState({ lat: position.coords.latitude });

                
//             },
//             (err) => {
//                 this.setState({errorMessage: err.message});
//             }

//         );
//     }

//     render () {
//         // return <div>Latitude: { this.state.lat }</div>
//         if (this.state.errorMessage && !this.state.lat) {
//             return (
//             <div>Error: {this.state.errorMessage}</div>
//             );
//         }

//         if (!this.state.errorMessage && this.state.lat) {
//             return (
//             <div>Latitude: {this.state.lat}</div>
//             )
//         }

//         return(
//             <div>Loading...</div>
//         )
//     }
// }

// ReactDOM.render (
//     <App />, document.querySelector("#root")
// )