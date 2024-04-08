/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../core/navigation/types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {appLoadingRef, showAlerMessage} from '../../core/utils/modal';
import {loadSchedule} from '../../apis/api-schedule';
import {
  IIndicator,
  IScheduleDisplay,
  ITime,
} from '../../core/types/schedule-response';
import {useEffect, useRef, useState} from 'react';
import {
  checkIsTimeActive,
  checkIsToday,
  checkIsTommorrow,
  checkIsYesterday,
  convertStatusDay,
  getHourAndMinute,
  getMonthAndDay,
} from '../../core/utils/times';

type NavigationProps = NativeStackNavigationProp<
  MainStackParamList,
  'ScheduleScreen'
>;

type RouteProps = RouteProp<MainStackParamList, 'ScheduleScreen'>;

export default function useSchedule() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps>();
  const {teacher} = route.params;

  const [indicators, setIndicators] = useState<IIndicator[]>([]);
  const [indicatorActive, setIndicatorActive] = useState<
    IIndicator | undefined
  >(undefined);
  const schedules = useRef<ITime[]>([]);
  const [scheduleDisplay, setScheduleDisplay] = useState<IScheduleDisplay[]>(
    [],
  );

  const onBack = () => {
    navigation.goBack();
  };

  const onChangeIndicator = (indicator: IIndicator) => {
    setIndicatorActive(indicator);
  };

  const loadScheduleDisplay = () => {
    if (!indicatorActive) {
      return;
    }
    const newScheduleDisplay: IScheduleDisplay[] = [];
    const scheduleMorning = schedules.current.filter(
      item => item.status === 0 && item.key === indicatorActive.key,
    );
    const scheduleAfternoon = schedules.current.filter(
      item => item.status === 1 && item.key === indicatorActive.key,
    );
    const scheduleEvening = schedules.current.filter(
      item => item.status === 2 && item.key === indicatorActive.key,
    );
    const newScheduleMorning = [];
    const newScheduleAfternoon = [];
    const newScheduleEvening = [];
    const lengthMorning =
      scheduleMorning.length % 2 === 0
        ? scheduleMorning.length
        : scheduleMorning.length - 1;
    const lengthAfternoon =
      scheduleAfternoon.length % 2 === 0
        ? scheduleAfternoon.length
        : scheduleAfternoon.length - 1;
    const lengthEvening =
      scheduleEvening.length % 2 === 0
        ? scheduleEvening.length
        : scheduleEvening.length - 1;
    for (let i = 0; i < lengthMorning; i = i + 2) {
      newScheduleMorning.push({
        value: `${getHourAndMinute(
          scheduleMorning[i].time,
        )} - ${getHourAndMinute(scheduleMorning[i + 1].time)}`,
        isActive: checkIsTimeActive(
          scheduleMorning[i].time,
          scheduleMorning[i + 1].time,
        ),
      });
    }
    for (let i = 0; i < lengthAfternoon; i = i + 2) {
      newScheduleAfternoon.push({
        value: `${getHourAndMinute(
          scheduleAfternoon[i].time,
        )} - ${getHourAndMinute(scheduleAfternoon[i + 1].time)}`,
        isActive: checkIsTimeActive(
          scheduleAfternoon[i].time,
          scheduleAfternoon[i + 1].time,
        ),
      });
    }
    for (let i = 0; i < lengthEvening; i = i + 2) {
      newScheduleEvening.push({
        value: `${getHourAndMinute(
          scheduleEvening[i].time,
        )} - ${getHourAndMinute(scheduleEvening[i + 1].time)}`,
        isActive: checkIsTimeActive(
          scheduleEvening[i].time,
          scheduleEvening[i + 1].time,
        ),
      });
    }
    if (newScheduleMorning.length > 0) {
      newScheduleDisplay.push({
        title: 'Buổi sáng',
        data: newScheduleMorning,
      });
    }
    if (newScheduleAfternoon.length > 0) {
      newScheduleDisplay.push({
        title: 'Buổi chiều',
        data: newScheduleAfternoon,
      });
    }
    if (newScheduleEvening.length > 0) {
      newScheduleDisplay.push({
        title: 'Buổi tối',
        data: newScheduleEvening,
      });
    }
    setScheduleDisplay(newScheduleDisplay);
  };

  const getSchedule = async () => {
    try {
      appLoadingRef.current?.showLoading();
      const res = await loadSchedule();
      const indicatorMap = new Map<string, boolean>();

      const newIndicators: IIndicator[] = [];
      const newSchedule: ITime[] = [];

      res.data.forEach(item => {
        const key = getMonthAndDay(item);
        const status = convertStatusDay(item);
        if (!indicatorMap.has(key)) {
          indicatorMap.set(key, true);
          const label = checkIsToday(item)
            ? 'Hôm nay'
            : checkIsTommorrow(item)
            ? 'Ngày mai'
            : checkIsYesterday(item)
            ? 'Hôm qua'
            : key;
          newIndicators.push({
            key,
            label,
          });
        }
        newSchedule.push({
          time: item,
          status,
          key,
        });
      });
      schedules.current = newSchedule;
      setIndicators(newIndicators);
      setIndicatorActive(newIndicators[0]);
    } catch (error: Error | any) {
      showAlerMessage('Error', error.message);
    } finally {
      appLoadingRef.current?.hideLoading();
    }
  };

  useEffect(() => {
    getSchedule();
  }, []);

  useEffect(() => {
    loadScheduleDisplay();
  }, [indicatorActive]);

  return {
    teacher,
    indicators,
    indicatorActive,
    scheduleDisplay,
    onBack,
    onChangeIndicator,
  };
}
