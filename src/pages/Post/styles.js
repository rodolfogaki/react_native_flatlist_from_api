import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },
  FlatList: {
    flex: 1,
    marginTop: 5
  },
  ContainerView: {
    marginBottom: 5,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFE4E1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#FFE4E1'
  },
  Texto: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  headerStyle: {
    flex: 1,
    height: 40,
    width: '100%',
    backgroundColor: '#DC143C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: 'white',
  },
});
