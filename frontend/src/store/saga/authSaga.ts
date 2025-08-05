import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  registerFailure,
  registerRequest,
  registerSuccess,
} from "../slice/authSlice";
import { logIn, signUp } from "../../api/authAPI";
import { SagaIterator } from "redux-saga";

function* loginSaga(action: ReturnType<typeof loginRequest>): SagaIterator {
  try {
    const { usernameOrEmail, password, onSuccess, onError } = action.payload;

    const res = yield call(logIn, { usernameOrEmail, password });
    if (res.data?.isSuccess) {
      yield put(
        loginSuccess({
          accessToken: res.data.token,
          user: {
            id: res.data.user.id,
            username: res.data.user.username,
            roles: res.data.user.roles,
          },
        })
      );

      if (onSuccess) onSuccess();
    } else {
      yield put(loginFailure("Login failed"));
      if (onError) onError("Login failed");
    }
  } catch (error: any) {
    const message = error.response?.data?.message || "Login error";
    yield put(loginFailure(message));
    if (action.payload.onError) action.payload.onError(message);
  }
}

function* registerSaga(action: ReturnType<typeof registerRequest>): SagaIterator {
  try {
    const { onSuccess, onError, ...formData } = action.payload;

    const res = yield call(signUp, formData);
    if (res.data) {
      yield put(registerSuccess());
      if (onSuccess) onSuccess();
    } else {
      yield put(registerFailure("Registration failed"));
      if (onError) onError("Registration failed");
    }
  } catch (error: any) {
    const message = error.response?.data?.message || "Register error";
    yield put(registerFailure(message));
    if (action.payload.onError) action.payload.onError(message);
  }
}

export function* authSaga(): SagaIterator {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(registerRequest.type, registerSaga);
}

export default authSaga;
