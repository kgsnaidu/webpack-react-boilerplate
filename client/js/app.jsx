import React from 'react';
import {render} from 'react-dom';
import Hello from './components/hello-world/hello-world';
const nodeHello = document.getElementById('node-hello');
render(<Hello />, nodeHello);
