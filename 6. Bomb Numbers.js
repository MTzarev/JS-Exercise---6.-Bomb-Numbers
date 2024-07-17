function bombNumbers(nums, bomb) {
    let targetNum = bomb[0];
    let power = bomb[1];
    let idxTargetNum = nums.indexOf(targetNum)
   let newArr=[]
for (let i=0; i<nums.length; i++){
    let curEl=nums[i]
    if(curEl===targetNum){
    let start = Math.max(0,idxTargetNum-power)
    let coundToEnd = (power*2+1)
  nums.splice(start, coundToEnd)
  i=i-power-1
    }
    console.log();
}
    console.log(nums.reduce((a,b)=>a+b));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);


