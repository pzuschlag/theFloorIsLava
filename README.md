# 🔥 The Floor is Lava 🔥
A website that shows what "The ground is lava" is and how to play it.

### **Der Boden ist was?**

**Der Boden ist Lava** - richtig gehört, **LAVA!!!**<br>
<br>
Schnell! -  Springe auf den nächsten Stuhl um nicht zu verbrennen.<br>
Kein Stuhl da? Dann nimm das Sofa, den Tisch oder zur Not deinen kleinen Bruder aber berühre unter keinen umständen den Boden.
<br><br>
Wer den Boden berührt, verbrennt!

---

## Über das Projekt

Kleine statische One-Page-Website (Januar 2019), entstanden als Studienabgabe und danach weiter
ausgebaut. Ohne Framework, bewusst mit reinem HTML, Sass und Vanilla-JavaScript.

- **Sass-Architektur** nach dem 7-1-Muster: `abstracts/`, `base/`, `components/`, `layout/`, `sections/`
- **JavaScript** (`js/`): Navbar-Effekt beim Scrollen, Overlay, Bildwechsel der Tier-Illustrationen
  bei Hover (`swapImage.js`), Feuer-Animation (`moveFire.js`) und Formular-Validierung
- **Illustrationen** als SVG (`img/`)

## Lokal ansehen

`index.html` im Browser öffnen. Styles neu bauen:

```bash
npx sass sass/main.scss css/main.css --source-map
```
