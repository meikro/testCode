(function(){
	'use strict'

	var arr = [1,5,3,5,4,6,3,2,4,5,3,1,0];
	// var arr = [1,5,3,0];


/**
 * disRepetition
 *     数组排重 
 * 1. 是否有重复元素
 * 2. 重复元素有那些
 * 3. 重复最多的元素是那个
 * 4. 没有重复的元素有那些
 * 5. 去重后的数组
 * 
 * @param {any} arr 
 */
	function disRepetition(arr){
		let obj = {};

		obj.success = arr.some((item, index, arr)=>{
			return arr.includes(item, index+1);
		});
		if(!obj.success){
			obj.notRepetition = arr;
			return obj;
		}
			// 前面没出现过 ，后面没出现过，就是不重复
			// 前面出现过，后面没出现过，已经判断过重复
			// 前面没有出现过，后面出现，第一次判断抽重复
		obj.element = arr.filter((item, index, arr) => {
			return arr.indexOf(item, index+1) > 0 && arr.lastIndexOf(item, index - arr.length - 1) === -1;
		}).sort();
		obj.nums = (function(){
			var max = 0; // 重复最高次数
			var arrStatis = obj.element.map(function(item, index){
				var arr = this,
					n = 0;
				// console.info(this);
				arr.forEach((option)=>{
					if(option === item){
						++n;
						max = n > max ? n : max;
					}
				});
				return {item: item, nums: n}
			},arr);
			return arrStatis.filter((item) => {
				return item.nums === max;
			});
		})();
		obj.notRepetition = arr.filter((item, index, arr) => {
			return arr.indexOf(item, index+1) === -1 && arr.lastIndexOf(item, index - arr.length - 1) === -1;
		}).sort();
		obj.maxItem = obj.nums.map((item)=>{
			return item.item
		});

		obj.maxNum = obj.nums[0] && obj.nums[0].nums;

		return obj;
	}



console.info(disRepetition(arr));
})();