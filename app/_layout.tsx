import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ClerkProvider } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import { KeyboardAvoidingView } from 'react-native';

const RootLayoutNav: React.FC = () => {
  const client = new ApolloClient({
    uri: 'https://full-backend-six.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ClerkProvider publishableKey={'pk_test_aW52aXRpbmctZ2F0b3ItODEuY2xlcmsuYWNjb3VudHMuZGV2JA'}>
        <ApolloProvider client={client}>
          <Slot />
        </ApolloProvider>
      </ClerkProvider>
    </KeyboardAvoidingView>
  );
};

export default RootLayoutNav;
