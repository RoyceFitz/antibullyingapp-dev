import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const [type, setType] = useState(CameraType.back)
  const CameraRef = useRef()

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
