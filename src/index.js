import './css/all.css';

import './css/wave.scss';
import './css/bubbles.css';
import './css/index.css'
import './css/ribbon.css';
import './css/progress.css';
import './css/progressBar.css';
// import ('./second');
import(/* webpackPrefetch: true */ './second').catch(null);
console.log('webperformance')
import './progressbar/loading'

var bar1 = new ldBar("#myItem1");
  var bar2 = document.getElementById('myItem1').ldBar;
  bar1.set(60);