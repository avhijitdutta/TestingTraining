angular.module("myApp").filter('makeUpperCase', function () {
  return function (item) {
    return item.toUpperCase();
  };
});


// Setup the filter
angular.module("myApp").filter('ordinal', function() {
  return function(number) {
    if(isNaN(number) || number < 1) {
      return number;

    } else {

      var lastDigit = number % 10;

      if(lastDigit === 0) {
        return number + 'th'
      }
      else if(lastDigit === 1) {
        return number + 'st'
      } else if(lastDigit === 2) {
        return number + 'nd'
      } else if (lastDigit === 3) {
        return number + 'rd'
      } else if (lastDigit > 3) {
        return number + 'th'
      }

    }
  }
});

// Setup the filter
angular.module("myApp").filter('capitalize', function() {
  return function(input, char) {

    if (isNaN(input)) {
      var char = char - 1 || 0;
      var letter = input.charAt(char).toUpperCase();
      var out = [];

      for (var i = 0; i < input.length; i++) {

        if (i == char) {
          out.push(letter);
        } else {
          out.push(input[i]);
        }
        
      }

      return out.join('');

    } else {
      return input;
    }

  }

});


// Setup the filter
angular.module("myApp").filter('customCurrency', function() { 

   return function(input, symbol, place,forth,fifth) {
    if(isNaN(input)) {
      return input;
    } else {

      // Check if optional parameters are passed, if not, use the defaults
      var symbol = symbol || '$';
      var place = place === undefined ? true : place;

      // Perform the operation to set the symbol in the right location
      if( place === true) {
        return symbol + input;
      } else {
        return input + symbol;
      }

    }
  }

});