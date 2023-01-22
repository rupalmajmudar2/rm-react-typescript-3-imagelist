import React from 'react'

/*onInputChange(event) { 
    console.log(event.target.value);
}*/

/*onFormSubmit(event) { 
    event.preventDefault(); //Do Not clear the screen on an <enter> press
    //console.log(this.state.entry); "Cannot read property (state) of undefined" -> THE most common error in all react projects!
}
Solution to the above: instead of assigning an Object, we assign an arrow-function.
Arrow-functions have the property that they auto-bind the "this" !!
*/

class SearchInput extends React.Component {

    state = { entry: '' }

    onFormSubmit = (event) => { //rm
        event.preventDefault(); //Do Not clear the screen on an <enter> press
        console.log("Form submitted with value=" + this.state.entry); 
        console.log("SearchInputPropFn=" + this.props.onSearchSubmitProp);
        this.props.onSearchSubmitProp(this.state.entry); //Call the parent component from a child!! Props in a class-based component. Use this.props in this case.
        console.log("OK")
    }

    render() {
        //console.log(this);
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input 
                                type="text" 
                                placeholder='Search...'
                                //onChange={onInputChange} //Only passing a reference to the function. NO () at end which would call this function on each #render ! And: _not_ this.onInputChange! //onSubmit //onClick
                                /*Alternative way: also uncontrolled : onChange = {(event) => console.log(event.target.value)} */
                                onChange = {(event) => {
                                                            //console.log(event.target.value);
                                                            this.setState({entry:event.target.value})
                                                        }
                                            }
                                value = {this.state.entry} /* "Controlled" : The user input is stored in React. Else in the earlier "Uncontrolled" version the user input is only stored in the DOM. Key diff.*/
                                /*onChange -> setState -> render() is called -> value gets set to the current state's value! */
                            />
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;