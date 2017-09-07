function slow(callback){
    process.nextTick( () => { 
        for(let i=0; i<5e8; i++){
            if(i==5e8-1) console.log(i);
        }
        console.log("loop finished") 
    });

    if (Math.random() > 0.5) {
            return callback("Error", null);
        }

        callback(null, { id: 12345 })
}
function exec(func){
    
    let error = "";
    let data = "";

    func( (e, d) => {
            error = e;
            data = d;
            });
    
    return {
        done: function (f) {
                if (data) {
                    f(data);
                }
                return this;
            },
        fail:  (f) => {
                if (error) {
                    f(error);
                }
        }
    };
}

exec(slow).done( (data) => { console.log(data); })
		.fail( (err) => {   console.log("Error " + err); });
