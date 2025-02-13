import { StyleSheet, View } from 'react-native';
import { Header } from '$pages/ui/Header';

export const PageWrapper = ({ children }) => {
  return (
    <View>
      <Header/>
      <View style={styles.wrapper}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
    padding: 16,
    paddingHorizontal: 10,
  },
});
