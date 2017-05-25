myApp.filter("noUnderscore", function() {
    return function(value){
        if (angular.isString(value)) {
            return value.replace(/_/g, ' ');
        } else {
            return value;
        }
    };
});