import React, {
  useState,
  useEffect
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import styles from './styles';

const Post = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const header = () => {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>POSTS</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.FlatList}
        keyExtractor={(item) => item.id.toString()}
        data={data}
        ListHeaderComponent={header}
        stickyHeaderIndices={[0]}
        renderItem={({ item }) => (
          <View style={styles.ContainerView}>
            <Text style={styles.Texto}>{item.id} - {item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Post;
