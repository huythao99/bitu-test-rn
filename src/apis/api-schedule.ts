import {delay} from '../core/constants';
import schedules from '../../mock/booking-times.json';
import {ScheduleResponse} from '../core/types/schedule-response';

export async function loadSchedule(): Promise<ScheduleResponse> {
  await delay(500);
  if (schedules.error_code) {
    throw new Error(schedules.message);
  }
  return schedules;
}
