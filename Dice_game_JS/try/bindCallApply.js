
var shubham={
  name: "shubham",
  age:22,
  job:'designer',
  intro: function(style,time)
  {
    if(style==='formal')
    {
        console.log("hello everyone ! Good "+time+"I'm " +this.name +" and Im a "+this.job);
    }
    else if(style==='friendly')
    {
        console.log("hey whats up guys , good "+time+"I'm " +this.name +" and Im a "+this.job);
    }
    else{
        console.log("IM "+this.name);
    }
  }
}

var tina={
  name: "tina",
  age:25,
  job:'consultant'
}
shubham.intro('friendly','evening');
//call function , where we can set the 
shubham.intro.call(tina,'formal','morning')
