import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentScreen from './src/screens/ComponentScreen';
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Comp: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'float',
    defaultNavigationOptions: {
      title: "Stuti's",
    },
  }
);

export default createAppContainer(navigator);
