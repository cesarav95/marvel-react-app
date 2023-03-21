import React from 'react';
import Navbar from './html/Navbar';
import Banner from './html/Banner';

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
