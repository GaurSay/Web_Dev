//first class functions
 /*var years=[1990,2003,1997,1992,2005];
function Generic(arr,fn)
{
  var result=[];
  for(var i=0;i<arr.length;i++)
  {
    result.push(fn(arr[i]));
  }
  return result;
}

function calculateAge(el)
{
  return 2019-el;
}
function isAdult(el)
{
  return 2019-el>=18;
}

var ans=Generic(years,calculateAge);
var adult=Generic(years,isAdult);
console.log(ans);
console.log(adult);
*/
//Function RETURNING FUNCTION
/*
function interview(job)
{
  if(job==='teacher')
  {
    return function(name)
    {
      console.log("what subject do you teach "+name +"?");
    };
  }
  else if(job=='designer')
  {
    return function(name)
    {
      console.log(name+" can you please explain ..what is UX design ??");
    };
  }
  else{
    return function(name)
    {
      console.log("what do you do ?? "+name +"?");
    };
  }
}*/
function interviewQues(job)
{
  return function(name)
  {
    if(job==='teacher')
    {
        console.log("what subject do you teach "+name +"?");
    }
    else if(job=='designer')
    {
        console.log(name+" can you please explain ..what is UX design ??");
    }
    else{
        console.log("what do you do ?? "+name +"?");
    }
  }
}

interviewQues('designer')("shubham");
interviewQues('teacher')("rajjuu");
