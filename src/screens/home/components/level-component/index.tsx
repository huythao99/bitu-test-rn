/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {LevelData} from '../../../../core/types/level-response';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import IMAGES from '../../../../core/assets';

type Props = {
  item: LevelData;
  index: number;
};

function LevelComponent(props: Props) {
  const {item, index} = props;

  const [aspectRatio, setAspectRatio] = React.useState(1);

  const loadDataImage = () => {
    Image.getSize(item.image, (width, height) => {
      setAspectRatio(width / height);
    });
  };

  React.useEffect(() => {
    loadDataImage();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          source={IMAGES.ic_cloud_first}
          style={index % 2 === 0 ? styles.cloudFirst : styles.cloudSecond}
        />
        <Image
          source={{uri: item.image}}
          style={[styles.banner, {aspectRatio: aspectRatio}]}
        />
        <Image
          source={IMAGES.ic_cloud_second}
          style={index % 2 === 1 ? styles.cloudFirst : styles.cloudSecond}
        />
        {index !== 0 && (
          <Image
            source={IMAGES.ic_path}
            style={index % 2 === 1 ? styles.pathLeft : styles.pathRight}
          />
        )}
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity style={styles.btnQuestion} activeOpacity={0.8}>
          <Image source={IMAGES.ic_question} style={styles.iconQuestion} />
        </TouchableOpacity>
      </View>
      {item.objectives.length !== 0 ? (
        <View style={styles.objectContainer}>
          <Text style={styles.objectTitle}>Mục tiêu học</Text>
          <View style={styles.objectiveContentContainer}>
            {item.objectives.map(objective => {
              return (
                <View key={objective} style={styles.objective}>
                  <Image source={IMAGES.ic_true} style={styles.iconTrue} />
                  <Text style={styles.objectiveContent}>{objective}</Text>
                </View>
              );
            })}
          </View>
        </View>
      ) : (
        <View style={styles.comingSoonContainer}>
          <Text style={styles.comingSoon}>Coming soon</Text>
        </View>
      )}
      {item.objectives.length !== 0 && (
        <TouchableOpacity activeOpacity={0.8} style={styles.courseBtn}>
          <Text style={styles.courseText}>Xem khoá học</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default React.memo(LevelComponent);
