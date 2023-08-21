export const shuffleAnswers = (arr: string[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const combineAnswers = (answer: string, arr: string[]) => {
  const newArr = [...arr, answer];
  const combinedAnswers = shuffleAnswers(newArr);
  return combinedAnswers;
};

export const extractQuestions = (questions: object) => {
  const questionsOnly = Object.values(questions).map((item) => ({
    [`${item.question}`]: '',
  }));

  const questionsObject = Object.assign({}, ...questionsOnly);

  return questionsObject;
};
