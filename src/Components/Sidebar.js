import React from 'react';
import Analytic from './Images/analytics.png'
import Accounts from './Images/accounts.png'
import Payments from './Images/payments.png'
import Cards from './Images/cards.png'
import Settings from './Images/settings.png'
function Sidebar() {
  return (
    <div className='sidenav'>
      <ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">
    <img src={Accounts} alt="account" className='account'/>  accounts</a>
       
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
        <img src={Analytic} alt="analyse" className='analyse'/>  analytics </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
        <img src= {Payments} alt="payment" className='payment'/>  payments</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
        <img src= {Cards} alt="cards" className='cards'/>  cards</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
        <img src= {Settings} alt="setting" className='setting'/>   settings</a>
  </li>
</ul>
    </div>
  );
}
export default Sidebar;

