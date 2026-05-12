const BASE_URL = 'https://6900b99fff8d792314bb27e3.mockapi.io/products';

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(product),
    });
    
    if (!res.ok) {
        throw new Error('Error al crear producto');
    }
    const result = await res.json();
    return result;  
    }; 
 
// Import the functions you need from the SDKs you need

/* import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0bS9pv88qXSJ41LJJWWGaWXgCiwiTPDY",
  authDomain: "project-5874561455014826691.firebaseapp.com",
  projectId: "project-5874561455014826691",
  storageBucket: "project-5874561455014826691.firebasestorage.app",
  messagingSenderId: "898011724668",
  appId: "1:898011724668:web:33db6b517c70a5d15742f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const app = initializeApp(configuracionFirebase); // creamos la conexion
const autenticacion = getAuth(app); // iniciamos servico ios de usurios 
const baseDeDatos = getFirestore(app); //inicio el servisio de base de datos


export default App(); {

  //definimos los estados de nuestra aplicación

  const [usuario, setUsuario] = useState(null);
  const [listaDeTareas, setListaDeTareas] = useState([]);
  const [textoTarea, setTextoTareas] = useState("");
  const [estaCargando, setEstaCargando] = useState(true);
  const [idTareaEdicion, setIdTareaEdicion] = useState(null);

  //efecto para manejar el inicio de session automático

  useEffect( () => { 
      signInAnonymously(autenticacion) //pedimos entrar anonimamante

      return onAuthStateChanged(autenticacion, (u) => {
        setUsuario(u) //actualizamos el usuario
        if(!u) setEstaCargando(false) // si no hay ususario, dejo de cargar
      });


   },[]);

   useEffect ( () => {
    if(!usuario) return
    const consulta = query(
      collection(baseDeDatos, "tareas"), 
      orderBy ("fechaCreacion", "desc")

    );
    // escucho la base de datos

    const desuscribir = onSnapshot(consulta, (instantanea) => {
      setListaDeTareas(
        instantanea.docs.map( (d) => ({id: d.id, ...d.data()}))
    );
    setEstaCargando(false);

   });
   return () => desuscribir()

}, [usuario]);

} */