---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<head>
<script type="text/javascript">
    let root = "/what-to-do.github.io";
    var postsHREF = [{% for post in site.posts %}"{{ post.url }}"{% unless forloop.last %},{% endunless %}{% endfor %}];
    var postsTitle = [{% for post in site.posts %}"{{ post.title }}"{% unless forloop.last %},{% endunless %}{% endfor %}];
</script>

<script type="text/javascript">
    function nextPost()
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
    window.location.assign(nextPost().substr(1));
</script>
</head>