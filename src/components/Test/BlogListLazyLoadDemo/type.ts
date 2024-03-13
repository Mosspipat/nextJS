export interface BlogProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface QueryTanProps {
  queryKey: string[];
  pageParam: number;
  direction: string;
  signal: Signal;
}

export interface Signal {}
