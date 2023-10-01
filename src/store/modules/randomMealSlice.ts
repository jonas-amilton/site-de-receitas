import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { doGet } from '../../api';

export interface MealsType {
    "idMeal": number,
    "strMeal": string,
    "strDrinkAlternate": null,
    "strCategory": string,
    "strArea": string,
    "strInstructions": string,
    "strMealThumb": string,
    "strTags": string,
    "strYoutube": string,
    "strIngredient1": string,
    "strIngredient2": string,
    "strIngredient3": string,
    "strIngredient4": string,
    "strIngredient5": string,
    "strIngredient6": string,
    "strIngredient7": string,
    "strIngredient8": string,
    "strIngredient9": string,
    "strIngredient10": string,
    "strIngredient11": string,
    "strIngredient12": string,
    "strIngredient13": string,
    "strIngredient14": any,
    "strIngredient15": any,
    "strIngredient16": any,
    "strIngredient17": any,
    "strIngredient18": any,
    "strIngredient19": any,
    "strIngredient20": any,
    "strMeasure1": number,
    "strMeasure2": number,
    "strMeasure3": number,
    "strMeasure4": number,
    "strMeasure5": number,
    "strMeasure6": number,
    "strMeasure7": number,
    "strMeasure8": number,
    "strMeasure9": number,
    "strMeasure10": number,
    "strMeasure11": number,
    "strMeasure12": string,
    "strMeasure13": string,
    "strMeasure14": any,
    "strMeasure15": any,
    "strMeasure16": any,
    "strMeasure17": any,
    "strMeasure18": any,
    "strMeasure19": any,
    "strMeasure20": any,
    "strSource": string,
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
}

const adapter = createEntityAdapter<MealsType>({
  selectId: (item) => item.idMeal,
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.randomMeal);

export const getAllMeals = createAsyncThunk('random.php/getAll', async () => {
  const response = await doGet('/random.php/');

  return response.results;
});

const randomMealSlice = createSlice({
  name: 'random',
  initialState: adapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMeals.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload);
    });
  },
});
export default randomMealSlice.reducer;
