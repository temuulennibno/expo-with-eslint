import { useAuth, useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();
  const { isSignedIn } = useAuth();

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignUp = await signUp.create({
        username,
        password,
      });
      await setActive({ session: completeSignUp.createdSessionId });
      router.push('/(app)/(tabs)');
    } catch (err: unknown) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
  if (isSignedIn ?? false) {
    router.push('/(app)/(tabs)');
  }
  return (
    <View style={{ flex: 1, gap: 20 }}>
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          gap: 20,
          padding: 20,
        }}>
        <View>
          <TextInput
            style={{ borderWidth: 1, padding: 20, color: 'black' }}
            placeholderTextColor={'black'}
            autoCapitalize="none"
            value={username}
            placeholder="Username..."
            onChangeText={(username) => setUsername(username)}
          />
        </View>
        <View>
          <TextInput
            style={{ borderWidth: 1, padding: 20, color: 'black' }}
            placeholderTextColor={'black'}
            autoCapitalize="none"
            value={password}
            secureTextEntry
            placeholder="Password..."
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity onPress={onSignUpPress} style={{ padding: 20, backgroundColor: 'green' }}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Sign up</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: 'right' }}>
          Already have account{' '}
          <Link style={{ color: 'blue' }} href={'/sign-in'}>
            Login
          </Link>
        </Text>
      </View>
    </View>
  );
}
