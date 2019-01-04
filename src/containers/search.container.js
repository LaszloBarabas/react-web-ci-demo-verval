import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchContainer extends Component {
	constructor(props) {
		super(props);

		this.state = { locationName: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ locationName: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		// We need to go and fetch weather data
		this.props.fetchWeather(this.state.locationName);
		this.setState({ locationName: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get   forecast in your favorite cities"
					className="form-control"
					value={this.state.locationName}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchContainer);
