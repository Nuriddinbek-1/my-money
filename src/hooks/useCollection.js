// React
import { useEffect, useState } from "react";

// Firebase
import { db } from "../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (collectionName) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (querySnapShot) => {
        const dataFromCollection = [];
        querySnapShot.forEach((doc) => {
          dataFromCollection.push({ id: doc.id, ...doc.data() });
        });
        setData(dataFromCollection);
      }
    );

    // Later ...

    // Stop listening to changes
    return () => unsubscribe();
  }, []);

  return { data };
};
