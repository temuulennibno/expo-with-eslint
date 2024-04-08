import { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Item = {
  id: string;
};

export default function TabTwoScreen(): React.ReactNode {
  const pageInfo = useRef({ page: 1, pageSize: 20 });
  const [data, setData] = useState<Item[]>([]);

  const [gotFirstData, setGotFirstData] = useState(false);

  const getData = () => {
    console.log({ pageInfo });
    fetch(
      `http://192.168.12.96:3000/api/mock?page=${pageInfo.current.page}&pageSize=${pageInfo.current.pageSize}`,
    )
      .then((res) => res.json())
      .then((newData) => {
        setData([...data, ...newData]);
      });
  };

  useEffect(() => {
    if (gotFirstData) {
      getData();
      setGotFirstData(true);
    }
  }, []);

  const getNextPageItems = () => {
    pageInfo.current.page += 1;
    getData();
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={data}
        keyExtractor={(item) => item.id}
        onEndReached={getNextPageItems}
        ListFooterComponent={() => (
          <View style={{ padding: 20, backgroundColor: 'lime', marginBottom: 10 }}>
            <Text style={{ textAlign: 'center' }}>Loading....</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={{ padding: 20, backgroundColor: 'green', marginBottom: 10 }}>
            <Text style={{ textAlign: 'center' }}>{item.id}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
