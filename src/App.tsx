import { useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const showModalHandler=()=>{
    setModalVisible(true);
  }

  const hideModalHandler = () => {
    setModalVisible(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}  />
      <main>
        <PostsList 
          isPosting={modalVisible}
          setModalVisible={setModalVisible} 
          hideModalHandler={hideModalHandler}   />
      </main>
    </>
  );
}

export default App;
