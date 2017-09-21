import React from 'react';
import PropTypes from 'prop-types';

function App({ name }) {
  return (
    <div>Hello {name} !</div>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  name: 'OCTO',
};

export default App;
