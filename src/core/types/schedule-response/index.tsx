export type ScheduleResponse = {
  error_code: number;
  message: string;
  data: number[];
};

export type IIndicator = {
  key: string;
  label: string;
};

export type ITime = {
  time: number;
  status: 0 | 1 | 2;
  key: string;
};

export type IScheduleDisplay = {
  title: string;
  data: ISchedule[];
};

export type ISchedule = {
  value: string;
  isActive: boolean;
};
