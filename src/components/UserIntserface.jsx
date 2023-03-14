import React from 'react';
import style from '../style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {decNumber, incNumber} from "../action/index"

const UserIntserface = () => {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch()

  return (
    <div className={style.interface}>
      <div className={style.heading}>
        <h2>Increment and Decrement</h2>
        <h2 className={style.greenHead}>Using React Redux</h2>
      </div>

      <div className={style.operation}>
        <button
          type="DECREMENT"
          className={style.btn1}
          onClick={() => dispatch(decNumber())}
        >
          Decrement
        </button>
        <input className={style.input} type="text" value={myState} />
        <button
          type="INCREMENT"
          className={style.btn2}
          onClick={() => dispatch(incNumber())}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default UserIntserface;
