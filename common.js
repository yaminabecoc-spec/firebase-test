import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
  getFirestore
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXG-vEw0ev4lqNtywdkMxzwWf8CEQ2M-c",
  authDomain: "yaminabe-f4c7d.firebaseapp.com",
  projectId: "yaminabe-f4c7d",
  storageBucket: "yaminabe-f4c7d.firebasestorage.app",
  messagingSenderId: "570479773819",
  appId: "1:570479773819:web:4a4b49f453f3ba9b77fade"
};

const app =
  initializeApp(firebaseConfig);

export const db =
  getFirestore(app);

let playerId =
  localStorage.getItem("playerId");

if (!playerId) {

  playerId =
    crypto.randomUUID();

  localStorage.setItem(
    "playerId",
    playerId
  );

}
