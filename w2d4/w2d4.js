

//Question Number 1
String.prototype.filter = function(banned){

    if(this.includes(banned)){
      let str=this.toString();
      this.toString=str.replace(banned,"");
  
        
    }
  
      return this.toString;
  
      
  }
  console.log("This house is not nice!".filter('not'));
  
  
  
  
  
  
  
  
  //Question Number 2
  
  var Person = function() {};
  
  Person.prototype.initialize = function(name, age)
  {
      this.name = name;
      this.age = age;
  }
  
  // TODO: create the class Teacher and a method teach
  
  var Teacher=function() {};
  Teacher.prototype = new Person();
  
  Teacher.prototype.teach=function(subject)
  {
  
      console.log(this.name + " is now teaching " + subject);
      return this.name + " is now teaching " + subject;
  }
  
  var him = new Teacher();
  
  him.initialize("Adam", 45);
  him.teach("Inheritance");
  
  
  
  
  
  //Question Number 3
  
  
  Array.prototype.bubbleSort = function() 
  {
  var is_sorted = false;
   while (!is_sorted) 
   {
      is_sorted = true;
      for (var n = 0; n < this.length - 1; n++) 
      {
        if (this[n] > this[n+1]){
          var x = this[n+1];
          this[n+1] = this[n];
          this[n] = x;
          is_sorted = false;
        }
      }
    }
    return this;
  };
  
  console.log([6,4,0, 3,-2,1].bubbleSort());
  
  
  
  