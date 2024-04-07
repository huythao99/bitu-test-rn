export type LevelResponse = {
  error_code: number;
  message: string;
  data: LevelData[];
};

export type LevelData = {
  name: string;
  short_name: string;
  level: number;
  objectives: string[];
  tooltip: string;
  status: number;
  image: string;
  animation: string;
  roadmap_id: string | null;
  star: number;
};
