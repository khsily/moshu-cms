import { store } from "../../../redux/store";
import { user } from "../../../redux/actions";

/**
 * localStorage를 이용한 유저
 * TODO: localStorage가 아닌 서버를 이용해 로그인시킬것!
 */

export const users = [
  {
    id: "admin",
    pw: "123456",
    nickname: "관리자",
  }
]

export function autoSignIn() {
  const id = localStorage.getItem("id");
  const pw = localStorage.getItem("pw");

  if (id && pw) {
    store.dispatch(user.signIn(id, pw));
  } else {
    store.dispatch(user.signOut());
  }
}

export function signIn(id, pw) {
  return new Promise((resolve, reject) => {
    this.users.forEach((v) => {
      if (v.id === id) {
        if (v.pw === pw) {
          localStorage.setItem("id", id);
          localStorage.setItem("pw", pw);
          resolve({ nickname: v.nickname });
        } else {
          reject({ errMsg: "아이디 혹은 비밀번호가 틀립니다." });
        }

        return;
      }
    });

    reject("아이디 혹은 비밀번호가 틀립니다.");
  })
}

export function signOut() {
  return new Promise((resolve, reject) => {
    localStorage.removeItem("id");
    localStorage.removeItem("pw");
    resolve();
  });
}