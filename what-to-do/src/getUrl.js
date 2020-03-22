function filteredIndices() {
  var fi = [];
  for (var i = 0; i < postsCats.length; i++) {
    if (postsCats[i].includes(getAge())) {
      fi.push(i)
    }
  }
  return fi;
}

function getUrl()
{
  var randomIndexUsed = [];
  var counter = 0;
  var numberOfPosts = 1;

  while (counter < numberOfPosts)
  {
    var randomIndex;
    var postHref;
    var postTitle;
    var res = "";
    var fi = filteredIndices();
    console.log(fi)
    randomIndex = fi[Math.floor(Math.random() * fi.length)]

    if (randomIndexUsed.indexOf(randomIndex) == "-1")
    {
      postHref = postsHref[randomIndex];
      randomIndexUsed.push(randomIndex);
      counter++;
      return postHref
    }
  }
} 
