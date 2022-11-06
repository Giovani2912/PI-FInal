import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { Game } from "../screens/Game";
import { RegisterUser } from '../screens/RegisterUser';
import { LoginUser } from '../screens/LoginUser';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="game"
        component={Game}
      />
      <Screen
        name="registeruser"
        component={RegisterUser}
      />
      <Screen 
        name="loginuser"
        component={RegisterUser}
      />
    </Navigator>
  );
}

// import { createDrawerNavigator } from '@react-navigation/drawer';

// // const Drawer = createDrawerNavigator();
// const { Navigator, Screen } = createDrawerNavigator();

// export function AppRoutes() {
//   return (
//       <Navigator 
//         initialRouteName="Register"   
//         screenOptions={{ headerShown: true }}
//       >
//         <Screen name="Register" component={RegisterUser} />
//         <Screen name="Login" component={LoginUser} />
//     </Navigator>
//   );
// }