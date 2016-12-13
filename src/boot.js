require('./assets/styles/main.less');
import React from 'react';
import { render } from 'react-dom';

import { Sample } from './js/Sample.jsx';

if (typeof(document) !== 'undefined' && window) {
  window.onload = () => {
    return render(
      <div>
        <Sample/>
      </div>,
      document.getElementById('app')
    );
  };
}
