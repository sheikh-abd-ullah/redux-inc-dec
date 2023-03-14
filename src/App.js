import UserIntserface from "./components/UserIntserface";
import style from './style.module.css'

function App() {

  return (
    <>
      <div className={style.App}>
        <UserIntserface />

        <div className={style.footer}>
          <p>© copyright, Sheikh Abdullah 2023</p>
        </div>
      </div>
    </>
  );
}

export default App;
