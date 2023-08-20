export const getQuizzes = async (url:string) => {
  const response = await fetch(url)
  // https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple
  const {results}  = await response.json()
  return results
}