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
    randomIndex = Math.floor(Math.random() * postsHref.length);

    if (randomIndexUsed.indexOf(randomIndex) == "-1")
    {
      postHref = postsHref[randomIndex];
      console.log(postsHref)
        randomIndexUsed.push(randomIndex);
      counter++;
      return postHREF
    }
  }
} 
