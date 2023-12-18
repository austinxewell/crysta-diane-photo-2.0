import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  browserLocalPersistence
} from 'firebase/auth';

export default function useAuth() {
  const user = useState('userStore', () => ({}));
  const errorBag = ref({
    email: null,
    password: null
  });

  useFirebase();

  const auth = getAuth();

  function login({ email, password }) {
    resetErrors();

    console.log('email: ' + email, 'password: ' + password);
    const validatedData = useAuthValidator({ email, password });

    if (!validatedData.flag) {
      errorBag.value = validatedData;
      return;
    }

    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithEmailAndPassword(auth, email, password).then((userDetails) => {
        user.value = userDetails.user;
        userDetails.user.getIdToken().then((token) => {
          serverAuth(token);
        });
      });
    });
  }

  function logout() {
    auth.signOut().then(() => {});
  }

  function signUp({ email, password }) {
    resetErrors();

    console.log('email: ' + email, 'password: ' + password);
    const validatedData = useAuthValidator({ email, password });

    if (!validatedData.flag) {
      errorBag.value = validatedData;
      return;
    }

    setPersistence(auth, browserLocalPersistence).then(() => {
      createUserWithEmailAndPassword(auth, email, password).then((userDetails) => {
        user.value = userDetails.user;
        userDetails.user.getIdToken().then((token) => {
          console.log(token);
          // serverAuth(token);
        });
      });
    });
  }

  function resetErrors() {
    errorBag.value = {
      email: null,
      password: null
    };
  }

  function serverAuth(token) {
    $fetch('api/login', {
      method: 'POST',
      body: JSON.stringify({ token })
    })
      .then((res) => {
        if (res.statusCode == 200) {
          navigateTo('/admin');
        }
      })
      .catch((err) => {
        alert('Invalid credentials');
      });
  }

  return { user, login, signUp, logout, errorBag };
}
