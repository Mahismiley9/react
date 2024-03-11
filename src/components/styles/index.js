//import "./index.css"
import styles from "./index.module.css"
export default function TodoList() {
  const style={
    color:"hotpink",
    fontSize:25
  }
    return (
      <div>
      <h1 className={styles.newText} >Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        class="photo"
     />
      <ul>
        <li style={style}>Invent new traffic lights</li>
        <li style={style}>Rehearse a movie scene</li>
        <li style={style}>Improve spectrum technology</li>
      </ul>
   </div> 
        );
  }