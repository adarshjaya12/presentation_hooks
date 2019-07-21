import {render} from 'react-dom';
import * as React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
render(<App/>, document.getElementById('root'));
