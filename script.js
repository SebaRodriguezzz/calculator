    const add = ((...args) => {
        let result = args[0];
        for (let i = 1; i < args.length; i++) {
            result += parseFloat(args[i]);
            
        }
        return result;
    });

    const subtract = ((...args) => {
        let result = args[0];
        for (let i = 1; i < args.length; i++) {
            result -= parseFloat(args[i]);
            
        }
        return result;
    })

    const multiply = ((...args) => {
        let result = args[0];
        for (let i = 1; i < args.length; i++) {
            result *= parseFloat(args[i]);
            
        }
        return result;
    })

    const divide = ((...args) => {
        let result = args[0];
        for (let i = 1; i < args.length; i++) {
            result /= parseFloat(args[i]);
            
        }
        return result;
    })