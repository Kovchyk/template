import React from 'react';
import './App.css';
import AppLayout from './components/AppLayout';
import Header from './components/Header';
import Content from './components/Content';

function App(): JSX.Element {
  return <AppLayout header={<Header />} content={<Content />} />;
}

export default App;
