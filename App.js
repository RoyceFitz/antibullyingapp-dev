import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [permission, requestPermission] = Camera.useCameraPermissions()
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

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Camera type={CameraType.front}>

      </Camera>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
