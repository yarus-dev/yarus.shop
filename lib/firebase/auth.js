import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/src/lib/firebase/client";

export function onAuthStateChanged(cb) {
  return () => {};
}

export async function signInWithGoogle() {
  return;
}

export async function signOut() {
  return;
}
