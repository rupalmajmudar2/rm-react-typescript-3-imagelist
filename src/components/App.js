import React from 'react'
import SearchInput from './SearchInput';

class App extends React.Component {

    onSearchSubmit = (entry) => {
        console.log("App got search submission: " + entry);
    }

    //Pass in our callback into SearchInput, so that we are called when the Submit happens in SeacchInput!
    render() {
        console.log("App fn is : " + this.onSearchSubmit)
        return (
            <div className='ui container' style = {{marginTop : '30px'}}>
                <SearchInput onSearchSubmitProp = {this.onSearchSubmit} /> 
            </div>
        )
    }
}

export default App;