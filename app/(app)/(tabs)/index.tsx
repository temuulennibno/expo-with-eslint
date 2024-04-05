import { StyleSheet, Text, View } from 'react-native';

import { useAnimeGenresQuery } from '@/graphql/generated';

export default function TabOneScreen(): React.ReactNode {
  const { data, loading, error } = useAnimeGenresQuery();
  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data?.animeGenres.map((genre) => <Text key={genre.id}>{genre.title}</Text>)}
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
