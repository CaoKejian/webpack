(() => {
  "use strict";
  const e = {
    sayHi() {
      console.log("Hi, modal2");
    },
    x: 1,
    y: 2,
  };
  ({
    setTitle() {
      document.body.insertAdjacentHTML("beforeend", "<h1>Hi, Modal!</h1>");
    },
  }).setTitle(),
    e.sayHi(),
    e.x();
})();
