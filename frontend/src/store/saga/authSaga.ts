import { call, put, takeLatest } from "redux-saga/effects";
import { loginFailure, loginRequest, loginSuccess, registerFailure, registerRequest, registerSuccess } from "../slice/authSlice";
import { logIn, signUp } from "../../api/authAPI";
import { SagaIterator } from "redux-saga";

function* loginSaga(action: ReturnType<typeof loginRequest>): SagaIterator {
  try {
    const res = yield call(logIn, action.payload);
    if (res.data.isSuccess) {
      yield put(loginSuccess({
        accessToken: res.data.token,
        user: {
          id: res.data.user.id,
          username: res.data.user.username,
          roles: res.data.user.roles,
        },
      }));
    } else {
      yield put(loginFailure("Login failed"));
    }
  } catch (error: any) {
    yield put(loginFailure(error.response?.data?.message || "Login error"));
  }
}

function* registerSaga(action: ReturnType<typeof registerRequest>): SagaIterator {
  try {
    const res = yield call(signUp, action.payload);
    if (res.data) {
      yield put(registerSuccess());
    } else {
      yield put(registerFailure("Registration failed"));
    }
  } catch (error: any) {
    yield put(registerFailure(error.response?.data?.message || "Register error"));
  }
}

export function* authSaga(): SagaIterator {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(registerRequest.type, registerSaga);
}

export default authSaga;
