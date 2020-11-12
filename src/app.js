import { isKraken } from 'universal-env';
import { runApp } from 'rax-app';
import appConfig from './app.json';
import { alert, confirm, prompt } from './utils/dialogs';

// Polyfill alert for Kraken.
if (isKraken) {
  global.alert = alert;
  global.confirm = confirm;
  global.prompt = prompt;
}

runApp(appConfig);