import { StyleSheet, View } from 'react-native';

type Props = {
  backgroundColor?: string;
  borderColor?: string;
  width?: string;
};

export const Button = ({ backgroundColor = '#2563EB', borderColor = '', children }: Props) => {
  return <View style={[
    styles.badge,
    {
      backgroundColor,
      borderColor,
      borderWidth: borderColor ? 1 : 0,
    },
  ]}>{children}</View>;
};

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});
