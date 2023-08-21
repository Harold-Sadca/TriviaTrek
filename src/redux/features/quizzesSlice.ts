import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TypeQuestion } from '../../utils/types';

interface QuizzesState {
  value: TypeQuestion[];
}

const initialState: QuizzesState = {
  value: [],
};

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    setQuizzes: (state, action: PayloadAction<TypeQuestion[]>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuizzes } = quizzesSlice.actions;

export default quizzesSlice.reducer;
