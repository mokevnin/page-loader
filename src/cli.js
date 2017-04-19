import app from 'commander';
import pageLoader from './';

export default () => {
  app
    .version('0.0.3')
    .arguments('<url>')
    .description('Download page to a current directory')
    .option('-o, --output [dir]', 'Output directory')
    .action((url) => {
      pageLoader(url, app.output, console.log);
    })
    .parse(process.argv);
};
