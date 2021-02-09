import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Connexion from '../Composants/Connexion.js'
import Inscription from '../Composants/Inscription.js'
import Accueil from '../Composants/Accueil.js'

const ConnexionStackNavigator = createStackNavigator({
  Connexion: {
    screen: Connexion,
    navigationOptions: {
      headershown: false
    }
  },
  Inscription:{
    screen:Inscription,
    navigationOptions: {
      headershown: false
    }
  },
  Accueil:{
    screen:Accueil,
    navigationOptions: {
      headershown: false
    }
  }
})
export default createAppContainer(ConnexionStackNavigator)
