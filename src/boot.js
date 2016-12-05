require('./assets/styles/main.less');
import React from 'react';
import { render } from 'react-dom';

import { Sameple } from './js';

if (typeof(document) !== 'undefined' && window) {
  window.onload = () => {
    return render(
      <div>
      </div>,
      document.getElementById('app')
    );
  };
}
