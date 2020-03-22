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

  #button1{
  background-color: #205C75; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  }

  #age{
  background-color: #205C75; /* Green */
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  -webkit-border-radius: 0px;
  }
  </style>
</head>

# What to do

### Deine Challenge für die Zeit Zuhause

Dies ist ein historischer Moment. Deine Chance ist gekommen, die ganze Welt zu verbesseren.
Alles, was du tun musst ist, daheim zu bleiben. Um dir diese Zeit etwas zu vereinfachen, haben wir ein
paar interessante Challenges für dich zusammengestellt.

### Hier siehst du das Challenge-Wheel
 <div class="row">
  <div class="wheel">
     <img src="https://imgur.com/download/Gicyf3F" alt="wheel"> 
  </div>
  <div class="nexttowheel" style="position:absolute;left:650px; top:370px;">
    <label for="age">Wähle jetzt deine Kategorie:</label>
    <select id="age">
     <!-- <option value="Elt">Eltern</option> -->
      <option value="Jug">Jugend</option>
      <option value="Erw">Erwachsene</option>
      <option value="Kin">Kinder</option>
      <!-- <option value="Fam">Familie/WG/Paar</option> -->
    </select>
    <br>
    <br>
    <p><button type="button" id="button1" onclick="getChallenge();">Zieg mir die Challenge</button></p>
  </div>
</div> 
