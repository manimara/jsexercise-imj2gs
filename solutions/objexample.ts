function obj() {
    return {
        msg: "Hello",
        ckHanler: function() {
            console.log("this.msg");
            setTimeout(this.log, 1000)
        },
        ckHanler1: function() {
            console.log("this.msg11");

            setTimeout(this.header, 1000)
        },
        log: function() {
            console.log(this.msg);
        }
    }
}

function header() : void{
    console.log(this.msg);
};

let myObj = new obj();
myObj.ckHanler.call();
myObj.ckHanler1();

