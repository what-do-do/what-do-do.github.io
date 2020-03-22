function getChallenge()
{
  var e = document.getElementById("age");
  var strUser = e.options[e.selectedIndex].value;
  var url = getUrl();
  console.log(url);
  window.location.assign(url);
}
