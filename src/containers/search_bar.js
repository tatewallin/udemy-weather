import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term:''};

        // When passing a callback function around(ie. onChange={this.onInputChange} ) and the callback has a reference to 'this', need to bind the context
        // this( instance of SearchBar) has a function called onInputChange
        // bind that function to this( instance of SearchBar)
        // and replace onInputChange with the new bound instance of the function
        // it you dont do it, when onInputChange is called, this(instance of SearchBar) has a mystery context and does not know about setState
        // another way to bind it is with a =>(fat arrow) function
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term:event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        // need to go fetch data
        this.props.fetchWeather(this.state.term);
        this.setState({ term:'' });
    }

    render(){
        return(
            <form
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input
                    placeholder="get a five day forecast in your favorite city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary"> Submit </button>
                </span>
            </form>
        );
    }

}

function mapDispatchToProps(dispatch) {
    // syntax is actually {fetchWeather:fetchWeather}
    return bindActionCreators({ fetchWeather }, dispatch);
}
// null indicates that we don't need any application state
export default connect (null, mapDispatchToProps)(SearchBar)