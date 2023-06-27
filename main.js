import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { trackPageEvents } from './eventManagement';
import { buttonClickTrigger } from './trigger'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Google Analytics</h1>
    <div class="card">
      <button id="button_click" type="button">Button Click</button>
    </div>
     <div class="card">
       <a href="#" id="link_click">Link Click</a>
     </div>
  </div>
`
trackPageEvents()