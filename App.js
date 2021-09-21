import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';

function App() {

  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);

  useEffect(()=>{
    setList([
      
    ]);
  }, [])

  function addAction(newItem) {
    let newList = [...list];
    newList.push(
      {title:newItem, done:false}
    );
    setList(newList);
  }

  function handleToggleDone(index) {
    let newList = [...list];

    newList[index].done = !newList[index].done;

    setList(newList);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox 
        frasePadrao="Adicione um Item"
        onEnter={addAction}
      />

      <hr/>
      <ul>
        {list.map((item, index)=>(
          <li key={index}>
            {item.done &&
              <del>{item.title}</del>
            }
            {!item.done &&
              item.title
            }
            <button onClick={()=>handleToggleDone(index)}>
              {item.done && 'Desfazer'}
              {!item.done && 'Feito'}
            </button>
          </li>
        ))}
      </ul>
      
    </>
  );
}

export default App;