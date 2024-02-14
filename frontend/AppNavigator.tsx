// // AppNavigator.tsx
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LotsOfStyles from './components/FirstPage';
// import { OpenWeb } from './components/OpenURLScreen';
// import HomeScreen from './components/HomeScreen';

// const Stack = createStackNavigator();


// const AppNavigator: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="FirstPage">
//         {/* <Stack.Group> */}
//           <Stack.Screen name="FirstPage" options={{ headerShown: false }}>
//             {(props) => <LotsOfStyles {...props} openWeb={OpenWeb} />}
//             </Stack.Screen>
//           <Stack.Screen name="Home" component={HomeScreen} />
//           {/* </Stack.Group> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;
