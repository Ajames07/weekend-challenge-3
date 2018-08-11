console.log('JS');

const myApp = angular.modules('myApp', [] );

myApp.controller('ToDoController', function($http) {
    console.log('in ToDoController');
    const vm = this;
});// end myApp.controller
