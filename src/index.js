import React from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource } from 'react-admin';
import jsonRestProvider from 'ra-data-fakerest';

import data from './data';
import posts from './posts';
import comments from './comments';

import './styles.css';

const disableFakeFetchRequestsLogs = true;
const App = () => (
  <Admin dataProvider={jsonRestProvider(data, disableFakeFetchRequestsLogs)}>
    <Resource name="posts" {...posts} />
    <Resource name="comments" {...comments} />
    <Resource name="tags" />
  </Admin>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
