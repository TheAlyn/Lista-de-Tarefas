# Lista-de-Tarefas
Lista de tarefas realizada em React

Para não utilizar o botão de Marcar e Desfazer pode-se ser colocado esta estrutura de codigo.

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
          <li key={index} onClick={()=>handleToggleDone(index)}>
            {item.done &&
              <del>{item.title}</del>
            }
            {!item.done &&
              item.title
            }
          </li>
        ))}
      </ul>
      
    </>
  );
}

export default App;
