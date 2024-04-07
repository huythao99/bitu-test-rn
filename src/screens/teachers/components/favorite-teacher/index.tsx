import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {ITeacher} from '../../../../core/types/teacher-response';
import IMAGES from '../../../../core/assets';
import {COLORS} from '../../../../core/theme/colors';

type Props = {
  item: ITeacher;
};

export default function FavoriteTeacher(props: Props) {
  const {item} = props;

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        <Image source={IMAGES.ic_vietnam_circle} style={styles.country} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text
          style={[
            styles.status,
            {color: item.online_status === 1 ? COLORS.green_1 : COLORS.gray_5},
          ]}>
          {item.online_status === 1 ? 'Online' : 'Offline'}
        </Text>
      </View>
      <View style={styles.optionContainer}>
        {item.online_status === 0 && (
          <TouchableOpacity style={styles.btnStart}>
            <Image
              source={IMAGES.ic_microphone}
              style={styles.iconStart}
              tintColor={COLORS.white}
            />
            <Text style={styles.textStart}>Start now</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.btnSchedule}>
          <Image source={IMAGES.ic_calendar} style={styles.iconCalendar} />
          <Text style={styles.textSchedule}>Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
