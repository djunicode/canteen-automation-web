import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import { client } from './helpers/graphql';

import Navbar from './components/Navbar/AppBar';
import HomePage from './pages/HomePage';
import OrdersPage from './pages/OrdersPage';

function AppContent() {
  return (
    <main id="App" className="d-flex flex-column vh-100">
      <Navbar />
      <section className="flex-grow-1">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/orders" component={OrdersPage} />
        </Switch>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ApolloProvider>
  );
}
