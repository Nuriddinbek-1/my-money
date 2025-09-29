import styles from "./Home.module.css";
import { useCollection } from "../hooks/useCollection";
import TransactionsList from "../components/TransactionsList";
import TransactionForm from "../components/TransactionForm";
import useGlobalContext from "../hooks/useGlobalContext";

function Home() {
  const { state } = useGlobalContext();
  const { data: transactions } = useCollection("transactions", state.user.uid);
  return (
    <div className={`${styles.home} container`}>
      {transactions && <TransactionsList transactions={transactions} />}
      <TransactionForm />
    </div>
  );
}

export default Home;
