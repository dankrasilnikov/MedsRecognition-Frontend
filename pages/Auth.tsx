import { Dimensions, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import Pills from '../assets/pills.svg';
import { SignIn } from '$features/auth/ui/SignIn';
import { BottomLabel } from '$shared/ui/BottomLabel';

export const AuthPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Pills style={styles.logo} width={50} height={50} />
        </View>
        <Text style={styles.h1}>MedsRecognition</Text>
        <Text style={styles.p}>Your AI-powered medication assistant</Text>
        <SignIn />
        <BottomLabel>Your data is kept private and secure</BottomLabel>
      </ScrollView>
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 20,
  },
  logoContainer: {
    marginVertical: height * 0.08,
    padding: 12,
    backgroundColor: '#3B82F6',
    marginHorizontal: 'auto',
    marginBottom: 0,
    borderRadius: 12,
  },
  logo: {
    aspectRatio: '1/1',
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  p: {
    color: '#737D8B',
    fontSize: 16,
    textAlign: 'center',
  },
  authContainer: {},
  authOptionsLabel: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  authOptions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  securityMessage: {
    fontSize: 12,
    color: '#737D8B',
    marginVertical: 16,
    textAlign: 'center',
  },
});
