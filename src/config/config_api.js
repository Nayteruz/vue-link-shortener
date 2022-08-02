import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child, push, query, limitToLast, update, remove, onValue, orderByChild, orderByKey, orderByValue, equalTo} from "firebase/database";

const config = {
    apiKey: "AIzaSyC5RpSCtGtGiZwcy4RDbSMrSTelXFr4oO8",
    authDomain: "short-links-78fa0.firebaseapp.com",
    projectId: "short-links-78fa0",
    storageBucket: "short-links-78fa0.appspot.com",
    messagingSenderId: "301674154227",
    appId: "1:301674154227:web:3350cef1d31a7df96f8f86"
};

const app = initializeApp(config);
export const db = getDatabase(app);
export const ref_db = ref;
export const push_ref = push;
export const child_db = child;
export const query_db = query;
export const limitToLast_db = limitToLast;
export const update_db = update;
export const remove_db = remove;
export const orderByChild_db = orderByChild;
export const equalTo_db = equalTo;
export const get_db = get;

