import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'this.state.name'})
      }
    />
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default function App() {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const [type, setType] = useState(CameraType.back)
  const CameraRef = useRef()
  const App = () => {
    return (
      <NavigationContainer>
        {/* Rest of your app code */}
      </NavigationContainer>
    );
  };

  if (!permission) {
    return (
      <View>
        <Text>
          Permission unavailable
        </Text>
      </View>
    )
  }
  if (!permission.granted) {
    requestPermission()
    return (
      <View>
        <Text>Requested permission for Camera</Text>
      </View>
    )
  }


  state = {
    name: 'Your Name',
  }

  const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <View style={styles.container}>
      <Camera ref={CameraRef} type={type} style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={styles.bottom}>
          <TouchableOpacity activeOpacity={0.6} onPress={async () => {
            setType(type == CameraType.back ? CameraType.front : CameraType.back)
          }}>
            <View style={styles.record}>

            </View>
          </TouchableOpacity>
        </View>
      </Camera>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottom: {
    padding: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  record: {
    backgroundColor: '#fa2d25',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: 'lightgray',
    borderWidth: 6,
  }
});
