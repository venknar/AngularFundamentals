angular.module('todomvc', ['firebase'])
.controller('TodoCtrl', function TodoCtrl($scope, $firebaseArray) {
    var fireRef = new Firebase('https://dazzling-heat-2785.firebaseio.com/');
    $scope.todos = $firebaseArray(fireRef);
    $scope.newTodo = '';

    $scope.addTodo = function(){
        var newTodo = $scope.newTodo.trim();
        if (!newTodo.length) {
            return;
        }
        // push to firebase
        $scope.todos.$add({
            title: newTodo,
            completed: false
        });
        $scope.newTodo = '';
    };

    $scope.removeTodo = function(todo){
        $scope.todos.$remove(todo);
    };

});