import {createAppContainer} from 'react-navigation'
import {createStackNavigator, createSwitchNavigator} from 'react-navigation-stack'
import Connexion from '../Composants/Connexion.js'
import Inscription from '../Composants/Inscription.js'
import Accueil from '../Composants/Accueil.js'
import Loading from '../Composants/Loading.js'

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
  Accueil:{
    screen:Accueil,
    navigationOptions: {
      headerLeft: null
    }
  },
  Loeading :{
    screen:Loading,
    navigationOptions: {
      headerLeft: null
    }
  },
});


export default createAppContainer(ConnexionStackNavigator)
