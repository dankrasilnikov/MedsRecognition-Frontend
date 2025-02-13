import { Pressable, StyleSheet } from 'react-native';

type Props = {
  pressedColor?: string;
  backgroundColor?: string;
  width?: string;
  onPress: () => void;
};

export const Button = ({
  pressedColor = '#0493b3',
  backgroundColor = '#2563EB',
  borderColor = '',
  onPress,
  width = '100%',
  children,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? pressedColor : backgroundColor,
          width,
          borderColor,
          borderWidth: borderColor ? 1 : 0,
        },
      ]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
});
