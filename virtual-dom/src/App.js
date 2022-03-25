import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  // memorize setState hook
  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, [] /* dependencies => onload */ );

  // memorize an object
  const listItems = useMemo(() => [5, 3, 1, 10, 9], [] /* dependencies => onload */);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
