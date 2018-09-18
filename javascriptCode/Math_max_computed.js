console.log(Math.pow(2,53));
var add = (function(){
    var middle = 0;
    return function (a,b){
        a += '';
        b += '';
        var aArr = a.split('').reverse(),
            bArr = b.split('').reverse(),
            maxNum = aArr.length >= bArr.length ? aArr : bArr,
            minNum = aArr.length < bArr.length ? aArr : bArr,
            resArr = [];
        return resArr = maxNum.map((item, index) => {
            var n1 = +item, n2 = +(minNum[index] || 0);
            var sum = n1 + n2 + middle + '';
            if(sum.length == 2){
                middle = +sum[0];
                sum = sum[1];
            } else {
                middle = 0;
            }
            return sum;
        }).reverse().join('');
    }
})();
var s = add('19007199254741005','9007199354850992');
console.info(s);