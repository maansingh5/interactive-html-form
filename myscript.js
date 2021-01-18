document.querySelector('form.form').addEventListener('submit', function(e) {
    e.preventDefault();
    let x = document.querySelector('form.form').elements;
    var li = document.createElement("option");  
    var textnode = document.createTextNode(x['name'].value); 
    li.appendChild(textnode);  
    document.getElementById("listone").appendChild(li);
  
  });
document.querySelector('form.form').addEventListener('reset', function(e) {
  // Get the <ul> element with id="myList"
var list1 = document.getElementById("listone");

// As long as <ul> has a child node, remove it
while (list1.hasChildNodes()) {   
  list1.removeChild(list1.firstChild);
}
var list2 = document.getElementById("listtwo");

// As long as <ul> has a child node, remove it
while (list2.hasChildNodes()) {   
  list2.removeChild(list2.firstChild);
}

  });

document.getElementById("one").addEventListener("click", function(e){
  var e = document.getElementById("listone");
  var strUser = e.options[e.selectedIndex].text;
  var li = document.createElement("option");  
  var textnode = document.createTextNode(strUser); 
  li.appendChild(textnode);  
  document.getElementById("listtwo").appendChild(li);
  e.removeChild(e.options[e.selectedIndex]);
  
});
document.getElementById("multi").addEventListener("click", function(e){
  {
    var fromEl = document.getElementById("listone"),
        toEl = document.getElementById("listtwo");

    if ( fromEl.selectedIndex >= 0 ) {
        var index = toEl.options.length;

        for ( var i = 0; i < fromEl.options.length; i++ ) {
            if ( fromEl.options[ i ].selected ) {
                toEl.options[ index ] = fromEl.options[ i ];
                i--;
                index++
            }
        }
    }
}
  
});      
document.getElementById("all").addEventListener("click", function(e){
  {
    var fromEl = document.getElementById("listone"),
        toEl = document.getElementById("listtwo");


        var index = toEl.options.length;

        for ( var i = 0; i < fromEl.options.length; i++ ) {
            if ( fromEl.options[ i ] ) {
                toEl.options[ index ] = fromEl.options[ i ];
                i--;
                index++
            }
        }
    
}
  
});