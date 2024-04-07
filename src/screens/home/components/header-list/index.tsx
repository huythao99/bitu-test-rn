import * as React from 'react';
import {Image, Text, View} from 'react-native';
import IMAGES from '../../../../core/assets';
import styles from './styles';

function HeaderList() {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.image_banner} style={styles.banner} />
      <Text style={styles.title}>Lộ trình học</Text>
    </View>
  );
}

export default React.memo(HeaderList);
