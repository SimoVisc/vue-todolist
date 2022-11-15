const { createApp } = Vue;

  createApp({
    data() {
      return {
        todoList: [
            {
               text:"fare la spesa",
               done: true
            },{
               text:"dare da mangiare al gatto",
               done: true
            },{
               text:"pagare le bollette",
               done: false
            }
        ]
      }
    }
  }).mount('#app')