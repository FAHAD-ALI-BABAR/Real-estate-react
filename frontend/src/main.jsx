import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-1wk6y6a5fz3bxvy1.us.auth0.com"
    clientId="hW4AkrxnCP659us7NrEp07aFF9xFgcju"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  
    <App />
    </Auth0Provider>
  
)
