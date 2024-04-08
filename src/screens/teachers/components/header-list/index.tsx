import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {ITeacher} from '../../../../core/types/teacher-response';
import FavoriteTeacher from '../favorite-teacher';

type Props = {
  teacherFavorites: ITeacher[];
  navigateSchedule: (teacher: ITeacher) => void;
};

export default function HeaderList(props: Props) {
  const {teacherFavorites, navigateSchedule} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giáo viên bạn theo dõi</Text>
      <View style={styles.teacherContainer}>
        {teacherFavorites.map(item => {
          return (
            <FavoriteTeacher
              navigateSchedule={navigateSchedule}
              item={item}
              key={item.id}
            />
          );
        })}
      </View>
      <Text style={styles.title}>Giáo viên khác</Text>
    </View>
  );
}
