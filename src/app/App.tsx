import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Container } from './components/Container/Container';
declare let module: any

ReactDOM.render(<Container />,
document.getElementById('root'));

if (module.hot) {
   module.hot.accept();
}