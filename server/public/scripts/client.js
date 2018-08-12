console.log('JS');

const myApp = angular.modules('myApp', [] );

myApp.controller('TaskController', function($http) {
    console.log('in TaskController');
    const vm = this;

    vm.tasks = [];

    vm.taskManager = function() {
        console.log('in taskManager');
        //gather input data
        //manage commpletion and delete 
    }//end TaskManager
});// end myApp.controller
