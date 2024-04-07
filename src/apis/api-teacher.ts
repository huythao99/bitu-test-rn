import {delay} from '../core/constants';
import {TeacherResponse} from '../core/types/teacher-response';
import teachers from '../../mock/mods.json';

export async function loadTeachers(): Promise<TeacherResponse> {
  await delay(500);
  if (teachers.error_code) {
    throw new Error(teachers.message);
  }
  return teachers;
}
