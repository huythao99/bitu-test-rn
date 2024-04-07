import {delay} from '../core/constants';
import levels from '../../mock/levels.json';
import {LevelResponse} from '../core/types/level-response';

export async function loadLevel(): Promise<LevelResponse> {
  await delay(500);
  if (levels.error_code) {
    throw new Error(levels.message);
  }
  return levels;
}
