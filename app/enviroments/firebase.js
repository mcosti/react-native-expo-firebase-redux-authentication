import firebase from '@firebase/app';
import '@firebase/auth';

const firebaseConfig = {
// replace this
};

let instance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(firebaseConfig);
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;
