import * as React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import AppSafeView from '../../core/components/app-safe-view';
import styles from './styles';
import IMAGES from '../../core/assets';
import useHome from './hooks';
import HeaderList from './components/header-list';
import LevelComponent from './components/level-component';

export default function HomeScreen() {
  const {levels, isRefreshing, getLevel} = useHome();

  return (
    <AppSafeView edge={{bottom: 'off'}} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Image source={IMAGES.image_bitu} style={styles.logo} />
          <Text style={styles.bitu}>Bitu</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.row, styles.supportContainer]}>
            <Image source={IMAGES.ic_headphone} style={styles.icon} />
            <Text style={styles.support}>Hỗ trợ</Text>
          </View>
          <View>
            <Image source={IMAGES.ic_bell} style={styles.icon} />
            <View style={styles.circleContainer}>
              <Text style={styles.textCircle}>12</Text>
            </View>
          </View>
        </View>
      </View>
      <FlatList
        contentContainerStyle={styles.flat}
        data={levels}
        refreshing={isRefreshing}
        showsVerticalScrollIndicator={false}
        onRefresh={getLevel}
        keyExtractor={item => item.level.toString()}
        ListHeaderComponent={<HeaderList />}
        renderItem={({item, index}) => {
          return <LevelComponent item={item} index={index} />;
        }}
      />
    </AppSafeView>
  );
}
