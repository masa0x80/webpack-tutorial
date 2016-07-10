'use strict'

import 'babel-polyfill'

const sleep = (msec) => new Promise((resolve) => {
  setTimeout(resolve, msec)
});

(async () => {
  let msec = 500
  console.log('start')
  console.log('  wait ', msec, ' msec.')
  await sleep(msec)
  console.log('end')
})();
