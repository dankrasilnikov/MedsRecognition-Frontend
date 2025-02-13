import { StyleSheet, Text } from 'react-native';


export const BottomLabel = ({ children }) => {
  return <Text style={styles.label}>{children}</Text>;
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 16,
    fontSize: 12,
    color: '#737D8B',
    textAlign: 'center',
    width: '100%',
    fontWeight: 'medium',
  },
});
