import "server-only";

import { headers } from "next/headers";
import { initializeServerApp } from "firebase/app";

import { firebaseConfig } from "@/lib/firebase/config";
import { getAuth } from "firebase/auth";

export async function getAuthenticatedAppForUser() {
  throw new Error("not implemented");
}
