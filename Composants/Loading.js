import React from 'react';
import Fire from "../firebaseAPI.js"

class Loading extends React.Component {

	componentDidMount() {
		const isLoggedIn = Fire.checkAuth(this.state.mail, this.state.password);
		this.props.navigation.navigate(isLoggedIn ? "Accueil" : "Connexion");
	}

	render() {
		return <Text>Loading screen</Text>;
	}
}

export default Loading
