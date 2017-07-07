window.onerror = function (msg, url, lineNo, columNo, error) {
  console.error(`%cNeed help?  Try the Escape Hatch:\n-> https://escapehatch.herokuapp.com/links/${btoa(msg)}`, 'color:red; font-weight:bold; background:#8fc1e3')
}
