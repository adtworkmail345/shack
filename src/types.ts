export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  scores: { [key: string]: number };
}

export type FarmerType = 'existing' | 'fanatic' | 'shrimp' | 'ordinary' | 'trader' | 'hi-tech';

export interface Result {
  type: FarmerType;
  title: string;
  description: string;
  imageUrl: string;
}