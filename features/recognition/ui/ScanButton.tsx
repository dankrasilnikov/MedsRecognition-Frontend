import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '$shared/ui/Button';
import AddIcon from '$assets/add.svg';

type Props = {
  onPress: any;
};

export const ScanButton = (props: Props) => {
  return (
    <Button {...props}>
      <View style={styles.buttonContentWrapper}>
        <AddIcon width={30} height={30} />
        <Text style={styles.label}>Add medication</Text>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  label: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  buttonContentWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    gap: 7,
  },
});
