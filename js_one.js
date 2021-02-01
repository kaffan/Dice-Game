function myFunction()
{
  var a = Math.floor(Math.random()*6+1);
  var b = Math.floor(Math.random()*6+1);
  myFunction1(a);
  myFunction2(b);
  if(a>b)
  {
    var c = document.querySelectorAll(".head1")[0];
    c.textContent = "Player 1 Wins";
  }
  else if(b>a)
  {
    var c = document.querySelectorAll(".head1")[0];
    c.textContent = "Player 2 Wins";
  }
  else
  {
    var c = document.querySelectorAll(".head1")[0];
    c.textContent = "Draw";
  }
}
function myFunction1(a)
{
  var c = document.querySelectorAll(".circle");
  switch(a)
  {
    case 1:
         for(var i=0;i<9;i++)
         {
           if(i===4)
           {
             c[i].style.visibility = "visible";
           }
           else
           {
             c[i].style.visibility = "hidden";
           }
         }
         break;
    case 2:
    for(var i=0;i<9;i++)
    {
      if(i===2 || i===6)
      {
        c[i].style.visibility = "visible";
      }
      else
      {
        c[i].style.visibility = "hidden";
      }
    }
    break;
    case 3:
    for(var i=0;i<9;i++)
    {
      if(i===4 || i===2 || i===6)
      {
        c[i].style.visibility = "visible";
      }
      else
      {
        c[i].style.visibility = "hidden";
      }
    }
    break;
    case 4:
    for(var i=0;i<9;i++)
    {
      if(i===0 || i===2 || i===6 || i===8)
      {
        c[i].style.visibility = "visible";
      }
      else
      {
        c[i].style.visibility = "hidden";
      }
    }
    break;
    case 5:
    for(var i=0;i<9;i++)
    {
      if(i===0 || i===2 || i===6 || i===8 || i===4)
      {
        c[i].style.visibility = "visible";
      }
      else
      {
        c[i].style.visibility = "hidden";
      }
    }
    break;
    case 6:
      for(var i=0;i<9;i++)
    {
      if(i===0 || i===2 || i===3 || i===5 || i===6 || i===8)
      {
        c[i].style.visibility = "visible";
      }
      else
      {
        c[i].style.visibility = "hidden";
      }
    }
    break;
  }
}
function myFunction2(b)
{
  var c = document.querySelectorAll(".circle");
  switch(b)
  {
    case 1:
         for(var i=9;i<18;i++)
         {
           if(i===13)
           {
             c[i].style.visibility = "visible";
           }
           else
           {
             c[i].style.visibility = "hidden";
           }
         }
         break;
    case 2:
    for(var i=9;i<18;i++)
    {
      if(i===11 || i===15)
      {
        c[i].style.visibility = "visible";
      }
      else
      {
        c[i].style.visibility = "hidden";
      }
    }
    break;
    case 3:
    for(var i=9;i<18;i++)
    {
      if(i===13 || i===11 || i===15)
      {
        c[i].style.visibility = "visible";
      }
      else
      {
        c[i].style.visibility = "hidden";
      }
    }
    break;
    case 4:
    for(var i=9;i<18;i++)
    {
      if(i===9 || i===11 || i===15 || i===17)
      {
        c[i].style.visibility = "visible";
      }
      else
      {
        c[i].style.visibility = "hidden";
      }
    }
    break;
    case 5:
    for(var i=9;i<18;i++)
    {
      if(i===9 || i===11 || i===15 || i===17 || i===13)
      {
        c[i].style.visibility = "visible";
      }
      else
      {
        c[i].style.visibility = "hidden";
      }
    }
    break;
    case 6:
      for(var i=9;i<18;i++)
    {
      if(i===9 || i===11 || i===12 || i===14 || i===15 || i===17)
      {
        c[i].style.visibility = "visible";
      }
      else
      {
        c[i].style.visibility = "hidden";
      }
    }
    break;
  }
}
