import { MdMessage, MdPostAdd } from 'react-icons/md';
import classes from './MainHeader.module.css';
import { Link, useNavigate } from 'react-router-dom';


const  MainHeader:React.FC=()=> {
  const navigate =useNavigate();

  const onCreatePostHandler=()=>{
    navigate('/create-post');
  }

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
       <Link  to="/"> 리액트 포스트</Link>
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePostHandler}  >
          <MdPostAdd size={18} />
          포트스 추가
        </button>
      </p>
    </header>
  );
}

export default MainHeader;