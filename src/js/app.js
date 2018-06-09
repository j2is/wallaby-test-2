let Test = require('./modules/test');

// Namespace
app = window.app = window.app || {};

app.isInit = false;

let initSite = () => {
  if(app.isInit){
    return;
  }
  app.isInit = true;
  new Test();
};

//Require and init our Module, and start the site
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', initSite);
}

if(document.readyState !== "loading" || document.readyState === "complete"){
  initSite();
}