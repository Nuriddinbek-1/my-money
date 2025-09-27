import styles from "./Home.module.css";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data } = useCollection("transactions");
  return <div>Home</div>;
}

export default Home;
