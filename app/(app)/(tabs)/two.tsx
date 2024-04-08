import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen(): React.ReactNode {
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | undefined>();
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  if (!status || !status.granted) {
    return (
      <View style={styles.container}>
        <Text>Give camera permission</Text>
        <Button title="Enable camera" onPress={requestPermission} />
      </View>
    );
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const uploadImage = async () => {
    if (image) {
      const data = new FormData();
      // @ts-ignore
      data.append('image', {
        name: 'image',
        type: image.type,
        uri: image.uri,
      });

      fetch(`http://192.168.12.96:3000/api/file/upload`, {
        method: 'POST',
        body: data,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log('response', response);
        })
        .catch((error: unknown) => {
          console.log(JSON.stringify(error, null, 2));
        });
    }
  };

  const captureImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Choose image from gallery" onPress={pickImage} />
      <Button title="Capture image" onPress={captureImage} />
      {image && (
        <View>
          <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
          <Button title="upload" onPress={uploadImage} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
