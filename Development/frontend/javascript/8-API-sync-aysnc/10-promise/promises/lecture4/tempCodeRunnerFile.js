Timeout(() => {
                const value = Math.random();
                if(value < 0.5) {
                    // resolve the promise
                    res(value);
                } else {
                    // reject the prom