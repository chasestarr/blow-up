import Constants from '../utils/constants';
import { apiRequest } from '../utils/api-requests';

export function makeAsyncActionSet(actionName) {
  return {
    REQUEST: actionName + '_REQUEST',
    SUCCESS: actionName + '_SUCCESS',
    FAILURE: actionName + '_FAILURE',
  };
}

export const LOGIN = makeAsyncActionSet('LOGIN');
export function loginUser(authOptions, code) {
  const { hostname } = authOptions;
  const isEnterprise = hostname !== Constants.DEFAULT_AUTH_OPTIONS.hostname;

  return dispatch => {
    const url = `https://${hostname}/login/oauth/access_token`;
    const method = 'POST';
    const data = {
      client_id: authOptions.clientId,
      client_secret: authOptions.clientSecret,
      code: code,
    };

    dispatch({ type: LOGIN.REQUEST });

    return apiRequest(url, method, data)
      .then(function(response) {
        dispatch({
          type: LOGIN.SUCCESS,
          payload: response.data,
          isEnterprise,
          hostname,
        });
      })
      .catch(function(error) {
        dispatch({ type: LOGIN.FAILURE, payload: error.response.data });
      });
  };
}

export const LOGOUT = 'LOGOUT';
export function logout() {
  return { type: LOGOUT };
}
