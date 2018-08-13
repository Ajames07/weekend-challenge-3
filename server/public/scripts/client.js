console.log('JS');

const myApp = angular.module('myApp', []);

myApp.controller('TaskController', function ($http) {
    console.log('in TaskController');
    const vm = this;

    vm.tasks = [];

    vm.taskManager = function (taskInput) {
        console.log('in taskManager');
        //gather input data
        //clear inputs after submit
        $http({
            method: 'POST',
            url: '/tasks',
            data: taskInput
        }).then(function (response) {
            console.log('successful then response');
            vm.taskInput.task = '';
        }).catch(function (error) {
            console.log('ERROR, failed to complete response.', error);

        });
        vm.retrieveTasks = function () {
            //get input data from server
            console.log('in retrieveTasks');
            $http({
                method: 'GET',
                url: '/tasks'
            }).then(function (response) {
                console.log('GET response successful');
                vm.tasks = response.data;
            }).catch(function(error) {
                console.log('ERROR in GET of retrieveTasks:', error);
            });
        }//end retrieveTasks
    } //end TaskManager
}); // end myApp.controller