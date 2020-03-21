---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

# Motivierende Überschrift

Dies ist ein historischer Moment. Deine Chance ist gekommen, die ganze Welt zum besseren zu verändern.
Alles, was du tun musst ist, daheim zu bleiben. Um dir diese Zeit etwas zu vereinfachen, haben wir ein
paar interessante Challenges für dich zusammengestellt. Bla bla bla.

<h1>HTML heading</h1>

<label for="age">Wähle deine Kategorie</label>

<select id="age">
<option value="Elt">Eltern</option>
<option value="Jug">Jugend</option>
<option value="Erw">Erwachsene</option>
<option value="Fam">Familie/WG/Paar</option>
</select>

<script>
function getChallenge() {
  var e = document.getElementById("age");
  var strUser = e.options[e.selectedIndex].value;
  var url = getUrl();
  console.log(url);
  window.location.assign(url);
}
</script>

<button type="button" onclick="getChallenge();">Wähle deine Challenge</button>

<script type="text/javascript">
var postsHREF = [{% for post in site.posts %}"{{ post.url }}"{% unless forloop.last %},{% endunless %}{% endfor %}];
var postsTitle = [{% for post in site.posts %}"{{ post.title }}"{% unless forloop.last %},{% endunless %}{% endfor %}];
</script>

  <script type="text/javascript">
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
</script>
