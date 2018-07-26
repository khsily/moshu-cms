/*
UKF: UNION_KID_FETCH
_S: SUCCESSFUL
_F: FAILURE
*/
const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

//로그인 전용
const SIGNIN = "SIGNIN";
const SIGNOUT = "SIGNOUT";



const defualtTypes = [REQUEST, SUCCESS, FAILURE];
const LoginTypes = [SIGNIN, SIGNOUT, SUCCESS, FAILURE];

function createRequestTypes(base, types = defualtTypes) {
  return types.reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const USER = createRequestTypes("USER", LoginTypes);
