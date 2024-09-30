# Training via JavaScript

Using JavaScript in online training

![Training via JavaScript logo](https://user-images.githubusercontent.com/37618836/157210711-e9e64cd2-ee87-44f6-9814-5030d24ac882.png)

## Sensors: accurate versus precise

This demo uses web components to compare and contrast accuracy with precision in sensor measurements. 

Web components use browser standards. They inherently work everywhere. 

The whole application automatically unfolds from the following simple HTML. 
```
<accurate-precise>
  <script type="module" src="./accurate-precise/web-comp.js"></script>
</accurate-precise>
```

## Serving locally 

This demo uses `fetch` which requires an http server. 

To use python's simple http server, open a terminal window in the `sensor-questions` directory, and run `python3 -m http.server 8080` then browse `http://localhost:8080`. 
