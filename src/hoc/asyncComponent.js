import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
	return class extends Component {
		state = {
			component: undefined
		};

		componentDidMount() {
			importComponent()
				.then((cmp) => {
					this.setState({ component: cmp.default });
				})
				.catch((err) => console.log(err));
		}

		render() {
			const C = this.state.component;

			return C ? <C {...this.props} /> : null;
		}
	};
};

export default asyncComponent;