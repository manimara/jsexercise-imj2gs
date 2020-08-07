var MyHashSet = /** @class */ (function () {
    function MyHashSet() {
        this.value = [];
    }
    MyHashSet.prototype.add = function (key) {
        // console.log(key, this.value)
        var index = this.value.indexOf(key);
        if (index == -1) {
            this.value.push(key);
        }
    };
    MyHashSet.prototype.remove = function (key) {
        console.log(key, this.value);
        var index = this.value.indexOf(key);
        this.value.splice(index, 1);
    };
    MyHashSet.prototype.contains = function (key) {
        var index = this.value.indexOf(key);
        if (index > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    return MyHashSet;
}());
/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
var inp1 = ["MyHashSet", "add", "contains", "add", "contains", "remove", "add", "contains", "add", "add", "add", "add", "add", "add", "contains", "add", "add", "add", "contains", "remove", "contains", "contains", "add", "remove", "add", "remove", "add", "remove", "add", "contains", "add", "add", "contains", "add", "add", "add", "add", "remove", "contains", "add", "contains", "add", "add", "add", "remove", "remove", "add", "contains", "add", "add", "contains", "remove", "add", "contains", "add", "remove", "remove", "add", "contains", "add", "contains", "contains", "add", "add", "remove", "remove", "add", "remove", "add", "add", "add", "add", "add", "add", "remove", "remove", "add", "remove", "add", "add", "add", "add", "contains", "add", "remove", "remove", "remove", "remove", "add", "add", "add", "add", "contains", "add", "add", "add", "add", "add", "add", "add", "add"];
var inp2 = [[], [58], [0], [14], [58], [91], [6], [58], [66], [51], [16], [40], [52], [48], [40], [42], [85], [36], [16], [0], [43], [6], [3], [25], [99], [66], [60], [58], [97], [3], [35], [65], [40], [41], [10], [37], [65], [37], [40], [28], [60], [30], [63], [76], [90], [3], [43], [81], [61], [39], [75], [10], [55], [92], [71], [2], [20], [7], [55], [88], [39], [97], [44], [1], [51], [89], [37], [19], [3], [13], [11], [68], [18], [17], [41], [87], [48], [43], [68], [80], [35], [2], [17], [71], [90], [83], [42], [88], [16], [37], [33], [66], [59], [6], [79], [77], [14], [69], [36], [21], [40]];
function validate() {
    var obj = new MyHashSet();
    for (var k = 1; k < inp1.length; k++) {
        if (inp1[k] == 'add') {
            obj.add(inp2[k]);
        }
        else if (inp1[k] == 'contains') {
            obj.contains(inp2[k]);
        }
        else if (inp1[k] == 'remove') {
            obj.remove(inp2[k]);
        }
        console.log(obj);
    }
}
validate();
