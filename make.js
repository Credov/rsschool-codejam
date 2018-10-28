function sum(a, b) {
    return a + b;
}
function make(){
  let sArgs = [];
  function makeHelp(...args){
    if (typeof args[0] === 'function') {
      return sArgs.reduce((acc,item) => {
        return args[0](acc,item);
        });
    }
    sArgs = sArgs.concat(...args);
    return makeHelp;
  }
  
  return makeHelp (...arguments);
}