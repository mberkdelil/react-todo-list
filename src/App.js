import React, { useState } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import { listeyeEkle, isaretle, temizle } from './actions/index';


const App = (props) => {

  const [text, setText] = useState('');

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="ekleme_formu">
        <input placeholer="listeye ekle" value={text} onChange={e => setText(e.target.value)} /><br />

        <input onClick={() => {
          setText("");

          props.listeyeEkle(text)
        }} type="button" value="Add" />

      </div>
      <div className="liste">
        {props.liste.map(item => (
          <div onClick={() => props.isaretle(item.id)} key={item.id} className={item.completed ? "yapildi" : ""}>{item.title}</div>
        ))}
      </div>
      <button onClick={() => props.temizle()} className="temizle">Clear Completed</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    liste: state.liste
  }
}

export default connect(mapStateToProps, { listeyeEkle, isaretle, temizle })(App);