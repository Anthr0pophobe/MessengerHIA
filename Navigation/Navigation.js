import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Connexion from '../Composants/Connexion.js'
import Inscription from '../Composants/Inscription.js'

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
  }
})
export default createAppContainer(ConnexionStackNavigator)
