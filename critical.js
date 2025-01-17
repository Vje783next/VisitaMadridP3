import { generate } from 'critical';

console.log('Starting critical CSS generation...');


generate({
  inline: true,
  base: 'src/',
  src: 'http://127.0.0.1:8080/index.html',
  target: {
    html: 'index_critico.html',
    css: 'critical.css',
  },  dimensions: [
    {
      height: 500,
      width: 300,
    },
    {
      height: 720,
      width: 1280,
    },
  ],
}).then(() => {
  console.log('Generated critical CSS');
}).catch((err) => {
  console.error(err);
});
