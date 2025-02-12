import { Alert } from 'react-native';

export const signUpWithPassword = async (email: string, password: string) => {
  const {
    data: { session },
    error,
  } = await fetch(process.env.API_URL + '/auth/signup/password');

  if (error) throw new Error(error.message);
  if (!session) Alert.alert('Please check your inbox for email verification!');
};

export const signInWithPassword = async (email: string, password: string) => {
  console.log('sign In');
  try{
    console.log(process.env.API_URL + '/login')
    const response = await fetch(process.env.API_URL + '/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        csrfmiddlewaretoken:'9Jydn1F1UdJCiksslJ496ef2DtskNASaFqvLSv2B2KxGBK4M6B7tFXgOxPWt0ri1',
        email,
        password,
      }),
    });
    console.log(response.url);
  } catch (error) {
    console.log(error);
  }


  // if (error) throw new Error(error.message);
  // if (!session) Alert.alert('Please check your inbox for email verification!');
};
