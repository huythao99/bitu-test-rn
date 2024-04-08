import * as React from 'react';
import AppSafeView from '../../core/components/app-safe-view';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import IMAGES from '../../core/assets';
import useTeachers from './hooks';
import HeaderList from './components/header-list';
import OtherTeacher from './components/other-teacher';

export default function TeachersScreen() {
  const {teacherFavorite, teacherOther, onBack, navigateSchedule} =
    useTeachers();

  return (
    <AppSafeView>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={onBack}>
          <Image source={IMAGES.ic_close} style={styles.iconClose} />
        </TouchableOpacity>
        <Text style={styles.title}>Chọn giáo viên</Text>
      </View>
      <FlatList
        data={teacherOther}
        contentContainerStyle={styles.flat}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <HeaderList
            navigateSchedule={navigateSchedule}
            teacherFavorites={teacherFavorite}
          />
        }
        renderItem={({item}) => {
          return (
            <OtherTeacher navigateSchedule={navigateSchedule} item={item} />
          );
        }}
      />
    </AppSafeView>
  );
}
