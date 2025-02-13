import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BoxShadow } from '$shared/ui/BoxShadow';
import ArrowIcon from '$assets/arrow.svg';
import SettingsIcon from '$assets/settings.svg';
import React from 'react';

type Props = {
  settings?: boolean;
  onBackPress: () => void;
  title: string;
};

export const Header = ({ settings = true, onBackPress, title }: Props) => {
  return (
    <BoxShadow>
      <View style={styles.header}>
        <Pressable onPress={onBackPress} style={[styles.button, { left: 26 }]}>
          <ArrowIcon width={23} height={16} />
        </Pressable>

        <Text style={styles.title}>Header</Text>

        <Pressable onPress={onBackPress} style={[styles.button, { right: 26 }]}>
          {settings ? <SettingsIcon width={31} height={31} /> : null}
        </Pressable>
      </View>
    </BoxShadow>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 27,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  title: {
    color: '#1F2937',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  button: {
    height: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
