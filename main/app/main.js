/**
 * Created by devi on 6/22/2017.
 */

(function(){
    angular.module('mean-demo',['ui.router','ngFileUpload'])
        .config(function ($stateProvider,$urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('signUp',{
                    url:"/signup",
                    templateUrl:"app/signup/signup.html",
                    controller:"SignupController"
                })
                .state('editProfile',{
                    url:"/edit-profile",
                    templateUrl:"app/profile/edit-profile-view.html",
                    controller:"EditProfileController"
                    }
                )
                .state('main',{
                    url:"/",
                    templateUrl:"app/main/main.html",
                    controller:"MainController"
                })
                .state('follow',{
                    url:"/follow-users",
                    templateUrl:"app/follow/follow.html",
                    controller:"FollowController"
                })
                .state('group',{
                    url:"/newgroup",
                    templateUrl:"app/groups/group.html",
                    controller:"GroupController"
                })
                .state('task',{
                    url:"/task_schedule",
                    templateUrl:"app/tasks/task.html",
                    controller:"TaskController"
                })

        })
}());
