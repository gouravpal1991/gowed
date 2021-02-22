import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCMuPpPXqmpOesHADMDzw2vd_DygsO_e4A',
  authDomain: 'gowed-5a98e.firebaseapp.com',
  databaseURL: 'https://gowed-5a98e-default-rtdb.firebaseio.com',
  projectId: 'gowed-5a98e',
  storageBucket: 'gowed-5a98e.appspot.com',
  messagingSenderId: '102591046023',
  appId: '1:102591046023:web:8304860b8c66777be6f322',
  measurementId: 'G-KWZFNJ6B7R',
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();


// componentDidMount() {
//     db.ref('/todos').on('value', querySnapShot => {
//       let data = querySnapShot.val() ? querySnapShot.val() : {};
//       let todoItems = {...data};
//       this.setState({
//         todos: todoItems,
//       });
//     });
//   }