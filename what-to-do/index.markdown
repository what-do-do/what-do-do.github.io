---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
<head>
  <script>
    let root = "";
    function getChallenge()
    {
      var e = document.getElementById("age");
      var strUser = e.options[e.selectedIndex].value;
      window.location.assign("router.html#"+strUser);
    }
  </script>
  <style>
  .row {
    display: flex;
  }

  .nexttowheel{
    flex: 70%;
  }
  .wheel {
    flex: 30%;
  }
  </style>
</head>
# Motivierende Überschrift

Dies ist ein historischer Moment. Deine Chance ist gekommen, die ganze Welt zum besseren zu verändern.
Alles, was du tun musst ist, daheim zu bleiben. Um dir diese Zeit etwas zu vereinfachen, haben wir ein
paar interessante Challenges für dich zusammengestellt. Bla bla bla.
 <div class="row">
  <div class="wheel">
     <img src="https://imgur.com/download/Gicyf3F" alt="wheel"> 
  </div>
  <div class="nexttowheel">
    <label for="age">Wähle deine Kategorie</label>
    <select id="age">
      <option value="Elt">Eltern</option>
      <option value="Jug">Jugend</option>
      <option value="Erw">Erwachsene</option>
      <option value="Fam">Familie/WG/Paar</option>
    </select>
    <br>
    <p><button type="button" onclick="getChallenge();">Wähle deine Challenge</button></p>
    
  </div>
</div> 


