myApp.filter("noUnderscore", function() {
    return function(value){
        if (angular.isString(value)) {
            return value.replace(/_/g, ' ');
        } else {
            return value;
        }  
    };
});
myApp.filter("roundedData", function(){
    return function(value){
       if (angular.isNumber(value)) {
            return Math.round(value * 100) / 100;
       } else {
            return value;
       }
    }
});