import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Connexion from '../Composants/Connexion.js'
import Inscription from '../Composants/Inscription.js'

const ConnexionStackNavigator = createStackNavigator({
  Connexion: {
    screen: Connexion,
  },
  Inscription:{
    screen:Inscription,
  }
})
export default createAppContainer(ConnexionStackNavigator)
