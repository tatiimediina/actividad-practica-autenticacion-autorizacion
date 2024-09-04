import './style.css'

import {renderLogin} from './login.js'
    
const pathname= window.location.pathname;

const $app = document.getElementById('app');

if (pathname === '/login') {
  renderLogin($app);
} 
