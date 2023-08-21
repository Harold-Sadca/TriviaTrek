export interface TypeQuiz {
  amount: number;
  category: number;
  difficulty: string;
  type: string;
}

export interface TypeQuestion {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  answered_correctly?: boolean;
  all_answers?: string[];
}
