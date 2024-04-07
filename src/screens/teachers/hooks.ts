import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../core/navigation/types';
import {appLoadingRef, showAlerMessage} from '../../core/utils/modal';
import {ITeacher} from '../../core/types/teacher-response';
import {useEffect, useState} from 'react';
import {loadTeachers} from '../../apis/api-teacher';

type TeacherNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'TeachersScreen'
>;

export default function useTeachers() {
  const navigation = useNavigation<TeacherNavigationProp>();

  const [teacherFavorite, setTeacherFavorite] = useState<ITeacher[]>([]);
  const [teacherOther, setTeacherOther] = useState<ITeacher[]>([]);

  const onBack = () => {
    navigation.goBack();
  };

  const getTeacher = async () => {
    try {
      appLoadingRef.current?.showLoading();
      const res = await loadTeachers();
      setTeacherFavorite(res.data.favorite_moderators);
      setTeacherOther(res.data.other_moderators);
    } catch (error: Error | any) {
      showAlerMessage('Error', error.message);
    } finally {
      appLoadingRef.current?.hideLoading();
    }
  };

  useEffect(() => {
    getTeacher();
  }, []);

  return {
    teacherOther,
    teacherFavorite,
    onBack,
  };
}
