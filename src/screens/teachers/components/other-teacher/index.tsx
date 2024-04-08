import * as React from 'react';
import {View} from 'react-native';
import {IOtherTeacher, ITeacher} from '../../../../core/types/teacher-response';
import styles from './styles';
import YoutubePlayer, {PLAYER_STATES} from 'react-native-youtube-iframe';
import {AppWidth} from '../../../../core/theme/dimensions';
import FavoriteTeacher from '../favorite-teacher';
import {getVideoId} from '../../../../core/utils/url';

type Props = {
  item: IOtherTeacher;
  navigateSchedule: (teacher: IOtherTeacher | ITeacher) => void;
};

export default function OtherTeacher(props: Props) {
  const {item, navigateSchedule} = props;
  const [playing, setPlaying] = React.useState(false);

  const onStateChange = (state: PLAYER_STATES) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  };

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={(AppWidth.WIDTH_343 * 190) / 343}
        play={playing}
        videoId={getVideoId(item.intro_video)}
        onChangeState={onStateChange}
        webViewStyle={styles.banner}
      />
      <FavoriteTeacher navigateSchedule={navigateSchedule} item={item} />
    </View>
  );
}
