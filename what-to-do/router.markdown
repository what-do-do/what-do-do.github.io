---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<head>
<script type="text/javascript">
  var postsHref = 
  [
  {% for post in site.posts %}
  "{{ post.url }}"
  {% unless forloop.last %},{% endunless %}
  {% endfor %}
  ];
  var postsCats = 
  [
  {% for post in site.posts %}
    [{% for cat in post.categories %}"{{ cat }}"{% unless forloop.last %},{% endunless %}{% endfor %}]
  {% unless forloop.last %},{% endunless %}
  {% endfor %}
  ];
  var postsScats = 
  [
  {% for post in site.posts %}
    [{% for scat in post.subcategories %}"{{ scat }}"{% unless forloop.last %},{% endunless %}{% endfor %}]
  {% unless forloop.last %},{% endunless %}
  {% endfor %}
  ];
</script>

<script type="text/javascript">
    function filteredIndices(category) {
        var fi = [];
        for (var i = 0; i < postsCats.length; i++) {
            if (postsCats[i].includes(category)) {
            fi.push(i)
            }
        }
        return fi;
    }

    function nextPost(category)
    {
        var randomIndexUsed = [];
        var counter = 0;
        var numberOfPosts = 1;

        while (counter < numberOfPosts)
        {
            console.log(2);
            var randomIndex;
            var postHref;
            var postTitle;
            var res = "";
            var fi = filteredIndices(category);
            randomIndex = fi[Math.floor(Math.random() * fi.length)];
            if (randomIndexUsed.indexOf(randomIndex) == "-1")
            {
                postHref = postsHref[randomIndex];
                randomIndexUsed.push(randomIndex);
                counter++;
                return postHref;
            }
        }
    } 
    window.location.assign('../'+nextPost(window.location.hash.substr(1)).substr(1)+window.location.hash);
</script>
</head>
