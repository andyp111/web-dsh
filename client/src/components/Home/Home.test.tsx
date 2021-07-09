import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './Home';
import { render } from '@testing-library/react';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home></Home>, div)
})