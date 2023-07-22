import { createSlice } from '@reduxjs/toolkit';

const routes = [
  {
    id: '1',
    name: 'Маршрут №1',
    coordinates: [[59.84660399, 30.29496392], [59.82934196, 30.42423701], [59.83567701, 30.38064206]],
  },
  {
    id: '2',
    name: 'Маршрут №2',
    coordinates: [[59.82934196, 30.42423701], [59.82761295, 30.41705607], [59.84660399, 30.29496382]],
  },
  {
    id: '3',
    name: 'Маршрут №3',
    coordinates: [[59.83567701, 30.38064206], [59.84660399, 30.29496392], [59.82761295, 30.41705607]],
  },
];

const routesSlice = createSlice({
  name: 'routes',
  initialState: { routes, selectedRoute: null, error: null },
  reducers: {
    selectRoute: (state, action) => {
        const { payload } = action;
        const routeToUpdate = state.routes.find((route) => route.id === payload.id);
        if (routeToUpdate) {
          routeToUpdate.polyline = payload.polyline;
        }
        state.selectedRoute = routeToUpdate;
      },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { selectRoute, setError } = routesSlice.actions;

export default routesSlice.reducer;
