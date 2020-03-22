---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

# Motivierende Überschrift

Dies ist ein historischer Moment. Deine Chance ist gekommen, die ganze Welt zum besseren zu verändern.
Alles, was du tun musst ist, daheim zu bleiben. Um dir diese Zeit etwas zu vereinfachen, haben wir ein
paar interessante Challenges für dich zusammengestellt. Bla bla bla.

<label for="age">Wähle deine Kategorie</label>

<select id="age">
  <option value="Elt">Eltern</option>
  <option value="Jug">Jugend</option>
  <option value="Erw">Erwachsene</option>
  <option value="Fam">Familie/WG/Paar</option>
</select>

<script>
function getAge() 
{
  var e = document.getElementById("age");
  var age = e.options[e.selectedIndex].value;
  return age;
}
</script>

<script src="./src/getChallenge.js" type="text/javascript"></script>

<button type="button" onclick="getChallenge();">Wähle deine Challenge</button>

<script>
function getAge() 
{
  var e = document.getElementById("age");
  var age = e.options[e.selectedIndex].value;
  return age;
}
</script>

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

<script src="./src/getUrl.js" type="text/javascript"></script>
