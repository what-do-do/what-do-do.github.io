function getUrl()
{
  var randomIndexUsed = [];
  var counter = 0;
  var numberOfPosts = 1;

  while (counter < numberOfPosts)
  {
    var randomIndex;
    var postHREF;
    var postTitle;
    var res = "";
    randomIndex = Math.floor(Math.random() * postsHREF.length);

    if (randomIndexUsed.indexOf(randomIndex) == "-1")
    {
      postHREF = postsHREF[randomIndex];
      console.log(postsHREF)
        randomIndexUsed.push(randomIndex);
      counter++;
      return postHREF
    }
  }
} 
