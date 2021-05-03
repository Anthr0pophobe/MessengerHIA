import {createAppContainer, createSwitchNavigator, } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Connexion from '../Composants/Connexion.js'
import Inscription from '../Composants/Inscription.js'
import Accueil2 from '../Composants/Accueil2.js'


const ConnexionStackNavigator = createStackNavigator({
  Connexion: {
    screen: Connexion,
    navigationOptions: {
      header: null,
    }
  },
  Inscription:{
    screen:Inscription,
    navigationOptions: {
      header: null,
    }
  },
  Accueil2:{
    screen:Accueil2,
    navigationOptions: {
      headerLeft: null
    }
  },
});





export default createAppContainer(ConnexionStackNavigator)
