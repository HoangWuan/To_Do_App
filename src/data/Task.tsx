import { collection, getDocs, addDoc, query, where, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useEffect } from "react";

const tasksCollectionRef = collection(db, "tasks");


export const getMovieList = async (setMovieList: any) => {
  try {
    const data = await getDocs(tasksCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
    }));
    setMovieList(filteredData);
  } catch (err) {
  }
};

export interface Task {
  id: string;
  name: string;
  timeCreate: number;
  checked: boolean;
}

export const addTask = async (newTask: Task) => {
  try {
    await addDoc(tasksCollectionRef, newTask);
  } catch (err) {
    console.log(err);
  }
};

export const checkTask = async(id: string) => {
  try{
    const q = query(tasksCollectionRef, where("id", "==", id)); 

    const querySnapshot = await getDocs(q);

    if(!querySnapshot.empty){
      const taskDoc = querySnapshot.docs[0];
      const taskDocRef = doc(db, "tasks", taskDoc.id);
      console.log(taskDoc.data());
      await updateDoc(taskDocRef, { checked:!taskDoc.data().checked });
    }
  }catch(error: any) {
    console.log(error);
  }
};

export const deleteTask = async (id: string) => {
  try{
    const q = query(tasksCollectionRef, where("id", "==", id)); 

    const querySnapshot = await getDocs(q);

    if(!querySnapshot.empty){
      const taskDoc = querySnapshot.docs[0];
      const taskDocRef = doc(db, "tasks", taskDoc.id);
      await deleteDoc(taskDocRef);
    }
  }catch(error: any) {
    console.log(error);
  }
};
