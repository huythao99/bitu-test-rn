import {useEffect, useState} from 'react';
import {showAlerMessage} from '../../core/utils/modal';
import {loadLevel} from '../../apis/api-home';
import {LevelData} from '../../core/types/level-response';

export default function useHome() {
  const [levels, setLevels] = useState<LevelData[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getLevel = async () => {
    try {
      setIsRefreshing(true);
      const response = await loadLevel();
      console.log('response 123', response.data);
      setLevels(response.data);
    } catch (error: Error | any) {
      showAlerMessage('Erorr', error.message);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    getLevel();
  }, []);

  return {
    levels,
    isRefreshing,
    getLevel,
  };
}
