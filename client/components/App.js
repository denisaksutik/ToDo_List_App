import React from 'react';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div className="wallpaper">
  	<div className="all_elem text-center">
    	<AddTodo />
    	<VisibleTodoList />
    	<Footer />
    </div>
  </div>
)

export default App;