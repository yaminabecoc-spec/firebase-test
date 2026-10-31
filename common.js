import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
  getFirestore
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "あなたのAPIキー",
  authDomain: "あなたのauthDomain",
  projectId: "あなたのprojectId",
  storageBucket: "あなたのstorageBucket",
  messagingSenderId: "あなたのmessagingSenderId",
  appId: "あなたのappId"
};

export const app =
  initializeApp(firebaseConfig);

export const db =
  getFirestore(app);
