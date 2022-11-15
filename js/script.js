const { createApp } = Vue;

  createApp({
    data() {
      return {
        newTodo:"",
        todoList: [
            {
               text:"fare la spesa",
               done: true
            },{
               text:"dare da mangiare al cane",
               done: true
            },{
               text:"pagare le bollette",
               done: false
            }
        ]
      }
    }, 
    methods: {
        newTask(){
          this.todoList.push(this.newTodo);
        }
    }
  }).mount('#app')