import { useAuth, useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { isSignedIn } = useAuth();

  if (isSignedIn ?? false) {
    router.push('/(app)/(tabs)');
  }
  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInResponse = await signIn.create({
        identifier: username,
        password,
        strategy: 'password',
      });
      setActive({ session: signInResponse.createdSessionId });
      router.push('/(app)/(tabs)');
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignContent: 'center', gap: 20, padding: 20 }}>
      <View>
        <TextInput
          style={{ borderWidth: 1, padding: 20, color: 'black' }}
          placeholderTextColor={'black'}
          autoCapitalize="none"
          value={username}
          placeholder="Username..."
          onChangeText={(input) => setUsername(input)}
        />
      </View>
      <View>
        <TextInput
          style={{ borderWidth: 1, padding: 20, color: 'black' }}
          placeholderTextColor={'black'}
          autoCapitalize="none"
          secureTextEntry
          value={password}
          placeholder="Password..."
          onChangeText={(input) => setPassword(input)}
        />
      </View>

      <TouchableOpacity onPress={onSignInPress} style={{ padding: 20, backgroundColor: 'green' }}>
        <Text style={{ textAlign: 'center', color: 'white' }}>Sign in</Text>
      </TouchableOpacity>
      <Text style={{ textAlign: 'right' }}>
        Not have account{' '}
        <Link style={{ color: 'blue' }} href={'/sign-up'}>
          Register
        </Link>
      </Text>
    </View>
  );
}
