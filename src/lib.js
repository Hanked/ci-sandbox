var Lib = {

    isDivisibleBy: function (a, b) {
        if (b === 0) {
            return "Cannot divide by 0";
        }
        return a % b === 0;  
    },

    isNegative: function (a) {
        return a < 0;
    },

    isPositive: function (a) {
        return a > 0;
    }

};
