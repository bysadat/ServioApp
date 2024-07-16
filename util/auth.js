// auth.js
import axios from "axios";

const API_KEY = "AIzaSyCWayj285BKjAn1zzQHT1cxjiN3T9QU3yI";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

export async function sendPasswordResetEmail(email) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`;
  await axios.post(url, {
    requestType: "PASSWORD_RESET",
    email: email,
  });
}
