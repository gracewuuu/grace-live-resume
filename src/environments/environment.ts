// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebaseConfig: {
     apiKey: "AIzaSyAqm9mPHP37Hu_eRpqW0qlDwm2RhB1VpRQ",
     authDomain: "grace-s-portfolio.firebaseapp.com",
     databaseURL: "https://grace-s-portfolio-default-rtdb.firebaseio.com",
     projectId: "grace-s-portfolio",
     storageBucket: "grace-s-portfolio.appspot.com",
     messagingSenderId: "136983446222",
     appId: "1:136983446222:web:f6de2b4244f6a72170869f",
     measurementId: "G-XQY4B6EZ83"


  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
