import { put, takeLatest, call, select } from 'redux-saga/effects';
import { getPolyline } from '../services/apiService';
import { selectRoute, setError } from './routesSlice';

// новый селектор для получения всех маршрутов
const selectRoutes = (state) => state.routes.routes;

function* fetchPolylineSaga(action) {
  try {
    const selectedRoute = yield select((state) => 
      state.routes.routes.find((route) => route.id === action.payload)
    );
    const polyline = yield call(getPolyline, selectedRoute.coordinates);
    yield put(selectRoute({ ...selectedRoute, polyline }));
  } catch (error) {
    yield put(setError(error.message));
  }
}


export default function* rootSaga() {
  yield takeLatest(selectRoute.type, fetchPolylineSaga);
}
