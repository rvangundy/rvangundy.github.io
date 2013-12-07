window.onload = function() {
  var div = document.createElement('div');
  div.innerHTML = 'Trackback: <a href="' + document.referrer + '">' + document.referrer + '</a>';
  
  document.body.appendChild(div);
};
