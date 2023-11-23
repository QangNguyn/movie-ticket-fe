import "bootstrap/dist/css/bootstrap.min.css";
import DefaultLayout from "./layouts/DefaultLayout";
import StateProvider from "./context/StateProvider";
import { useEffect } from "react";
import instance from "./utils/http";
function App() {
  // useEffect(() => {}, []);
  return (
    <StateProvider>
      <DefaultLayout />
    </StateProvider>
  );
}

export default App;
