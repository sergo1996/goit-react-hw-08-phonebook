import React from 'react';
import AppBar from '../AppBar/AppBar';

const styles = {
  container: {
    width: '800px',
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    padding: '30px',
  },
};

const Layout = ({ children }) => (
  <div style={styles.container}>
    <AppBar />
    {children}
  </div>
);

export default Layout;
