import * as React from 'react';
import AppSafeView from '../../core/components/app-safe-view';
import {
  FlatList,
  Image,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import IMAGES from '../../core/assets';
import useSchedule from './hooks';
import {COLORS} from '../../core/theme/colors';

export default function ScheduleScreen() {
  const {
    teacher,
    indicators,
    indicatorActive,
    scheduleDisplay,
    scrollRef,
    onBack,
    onChangeIndicator,
  } = useSchedule();

  return (
    <AppSafeView>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={onBack}>
          <Image source={IMAGES.ic_back} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.title}>Đặt lịch với {teacher.name}</Text>
      </View>
      <View style={styles.noteContainer}>
        <View style={styles.dot} />
        <Text style={styles.noteText}>
          Buổi học sẽ được hoàn lại nếu bạn huỷ lịch trước ít nhất 30 phút.
        </Text>
      </View>
      <View style={styles.indicatorContainer}>
        <FlatList
          data={indicators}
          horizontal
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.key}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => onChangeIndicator(item)}
                style={[
                  styles.indicator,
                  {
                    borderColor:
                      item.key === indicatorActive?.key
                        ? COLORS.orange_1
                        : COLORS.gray_7,
                  },
                ]}
                activeOpacity={0.8}>
                <Text
                  style={[
                    styles.textIndicator,
                    {
                      color:
                        item.key === indicatorActive?.key
                          ? COLORS.orange_1
                          : COLORS.gray_1,
                    },
                  ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <SectionList
        sections={scheduleDisplay}
        keyExtractor={item => item.value}
        stickySectionHeadersEnabled={false}
        renderItem={({item}) => (
          <View
            style={[
              styles.item,
              {borderColor: item.isActive ? COLORS.orange_1 : COLORS.gray_7},
            ]}>
            <Text
              style={[
                styles.title,
                {color: item.isActive ? COLORS.orange_1 : COLORS.gray_1},
              ]}>
              {item.value}
            </Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.titleDay}>{title}</Text>
        )}
      />
      <TouchableOpacity style={styles.btnBooking} activeOpacity={0.8}>
        <Text style={styles.textBooking}>Đặt lịch</Text>
      </TouchableOpacity>
    </AppSafeView>
  );
}
