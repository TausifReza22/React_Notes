import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Child3({ counterValue }) {
  const dataContext = useContext(DataContext);

  const { data, setData } = dataContext;

  console.log(data, " This is in child 3");

  console.log(counterValue, " This is in child 3");

  return <div>Child3</div>;
}
