import React from 'react';
import {scroller} from 'react-scroll';

//Component imports
import PageContainer from './components/pagecontainer/pagecontainer-component';
import Header from './components/header/header.component';

import './App.css';

class App extends React.Component {

  scrollToWithContainer(destination) {
      scroller.scrollTo(destination, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      });
  }

  render () {
    return (
      
      <div className="App">
        <Header scroll={this.scrollToWithContainer} />
        <PageContainer/>
        
      </div>
    );
  }
}

export default App;
