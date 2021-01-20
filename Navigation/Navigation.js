import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Connexion from '../Composants/Connexion.js'
import Inscription from '../Composants/Inscription.js'

const ConnexionStackNavigator = createStackNavigator({
  Connexion: {
    screen: Connexion,
    navigationOptions: {
      header: null
    }
  },
  Inscription:{
    screen:Inscription,
    navigationOptions: {
      header: null
    }
  }
})
export default createAppContainer(ConnexionStackNavigator)
