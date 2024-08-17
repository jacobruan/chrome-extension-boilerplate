// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.
// import { onMessage, sendMessage } from "webext-bridge/background";
import { localExtStorage } from '@webext-core/storage';

console.log(
  `⏎··'This·prints·to·the·console·of·the·service·worker·(background·script)',⏎`,
);

async function myFunction() {
  const value = 123;
  await localExtStorage.setItem('key', value);
  console.log(await localExtStorage.getItem('key'));
}

myFunction();
