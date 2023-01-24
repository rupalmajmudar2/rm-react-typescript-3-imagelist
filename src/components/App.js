import React from 'react'
import SearchInput from './SearchInput';
import Axios from 'axios'
import ImageList from './ImageList';   

class App extends React.Component {

    state = { images : [] }
    //async onSearchSubmit(entry) {
    onSearchSubmit = async (entry) => {
        console.log("App got search submission: " + entry);
        const response = await Axios.get(`https://pixabay.com/api/?key=32410484-fec6338c69960bf89bba52502&q=${entry}&image_type=photo`); //Note the special apostophes we used here. NOT the single-quotes. es-2015 backticks
        console.log(response.data.hits)
        //console.log(this) //"this" now is the #onSearchSubmit function, not the App instance. So cannot access this.state! Hence need to use the arrow-function as done earlier.
        this.setState({images: response.data.hits})  //will cause re-render
    }

    //Pass in our callback into SearchInput, so that we are called when the Submit happens in SeacchInput!
    render() {
        //console.log("App fn is : " + this.onSearchSubmit)
        return (
            <div className='ui container' style = {{marginTop : '30px'}}>
                <SearchInput onSearchSubmitProp = {this.onSearchSubmit} /> 
                We have { this.state.images.length } images.
                <ImageList images={this.state.images}></ImageList>
            </div>
        )
    }
}

export default App;