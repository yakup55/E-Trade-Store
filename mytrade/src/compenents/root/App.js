import Navi from "../navi/Navi";
import Paths from "./Paths";
import SimpleSnacbar from "../snacbar/simpleSnacbar"
import Loading from "../progress/Loading"
import Footer from "../footer/Footer"
import styles from "../../App.module.css"
function App() {
  return (
<>
<Navi></Navi>
<Loading></Loading>
<main className={styles.container}>
<Paths></Paths>
</main>
  
 <SimpleSnacbar>
</SimpleSnacbar>
<Footer></Footer>
</>
  );
}

export default App;
