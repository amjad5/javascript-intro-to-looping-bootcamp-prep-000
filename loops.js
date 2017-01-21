function forLoop(array) {

  for(let i=0;i<25;i++)
  {
    if(i===1){
      array.push('I am 1 strange loop.');
    }else{
        array.push(`I am ${i} strange loops.`);
      }
  }
  return array
}
function whileLoop(num) {
  while(num > 0)
  {
    console.log(num);
    --num;
  }
  return 'done';
}

function maybeTrue(array) {
  if(array.length>=0)
  {
    array.pop();
    console.log(array);
    return true;
  }
  return false;
}

function doWhileLoop(array) {
  do{
    //maybeTrue(array)
  }
  while(array.length > 0 && maybeTrue(array))
  return [];
}