export type TeacherResponse = {
  error_code: number;
  message: string;
  data: TeacherData;
};

export type TeacherData = {
  favorite_moderators: ITeacher[];
  other_moderators: IOtherTeacher[];
};

export type ITeacher = {
  id: number;
  name: string;
  avatar: string;
  online_status: number;
  status: number;
  intro_video: string | null;
  original_type: number;
  country: string;
};

export type IOtherTeacher = {
  id: number;
  name: string;
  avatar: string;
  online_status: number;
  status: number;
  intro_video: string;
  original_type: number;
  country: string;
};
