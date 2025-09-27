import styles from "./Home.module.css";
import { useCollection } from "../hooks/useCollection";
import TransactionsList from "../components/TransactionsList";
import TransactionForm from "../components/TransactionForm";

function Home() {
  const { data: transactions } = useCollection("transactions");
  return (
    <div className={`${styles.home} container`}>
      {transactions && <TransactionsList transactions={transactions} />}
      <TransactionForm />
    </div>
  );
}

export default Home;
