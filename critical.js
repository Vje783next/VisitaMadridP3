import {generate} from 'critical';

generate({
  inline: false,
  base: 'src/',
  src: 'index.html',
  target: {
    css: 'critical.css',
    html: 'index-critical.html'
  },  
  width: 1300,
  height: 900,
});