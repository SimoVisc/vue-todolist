const { createApp } = Vue;

  createApp({
    data() {
      return {
        newTodo: {
          text: "",
          done: "",
        },
        todoList: [
            {
              text:"fare la spesa",
              done: false
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
         const objNewtodo ={
            text: this.textNewTodo,
            done: false
         };
          this.todoList.push(objNewTodo);
          this.textNewTodo
        },
        removeTask(i){
         this.todoList.splice(i,1)
        },
    
    }
  }).mount('#app')