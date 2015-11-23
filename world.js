window.onload = function()
{
    var x= document.getElementById("term");
    var z= document.getElementById("lookup");
    z.addEventListener("click", go, true);
    
    function go()
    {

            var request = new XMLHttpRequest;
    request.onreadystatechange = function()
    {
        if(request.readyState == 4 && request.status == 200)
        {
            document.getElementById("result").innerHTML = request.responseText;
        }
    };
    request.open("GET", "world.php?lookup="+x.value, true);
    request.send();
    
        }
        
}