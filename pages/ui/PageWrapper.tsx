import { StyleSheet, View } from 'react-native';
import { Header } from '$pages/ui/Header';
import React from 'react';

type Props = {
  children: React.ReactNode;
  pageTitle: string;
  settings?: boolean;
  onBackPress: () => void;
};

export const PageWrapper = ({ children, pageTitle, settings = false, onBackPress }: Props) => {
  return (
    <View>
      <Header
        title={pageTitle}
        onBackPress={onBackPress}
        settings={settings}
      />
      <View style={styles.wrapper}>{children}</View>
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
