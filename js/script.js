const { createApp } = Vue;

  createApp({
    data() {
      return {
        newTodo:"",
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
            text: this.newTodo,
            done: false
          }
          this.todoList.push(this.newTodo);
          this.newTodo= ""
        },
        removeTask(i){
         this.todoList.splice(i,1)
        }
    }
  }).mount('#app')