define("Class",
    function() {
        function extend(extentions) {
            var hasOwnproperty = Object.hasOwnProperty;
            var object = Object.create(this);

            for (property in extentions) {
                if (hasOwnproperty.apply(extentions, property) || typeof object[property] === 'undefined') {
                    object[property] = extentions[property];
                }
            }

            return object;
        }

        return function() {
            extend: extend,
            create: function() {

            }
        }
        
    });
