// React
import { useEffect, useState } from "react";

// Firebase
import { db } from "../firebase/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export const useCollection = (collectionName, uid) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const q = query(collection(db, collectionName), where("uid", "==", uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const dataFromCollection = [];
      querySnapshot.forEach((doc) => {
        dataFromCollection.push({ id: doc.id, ...doc.data() });
      });
      setData(dataFromCollection);
    });

    // Later ...

    // Stop listening to changes

    return () => unsubscribe();
  }, []);

  return { data };
};
