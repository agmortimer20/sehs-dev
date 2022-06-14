---
container: "container"
layout: "../../../layouts/PageLayout.astro"
title: Project 1 - Stoplight
---

[← Back](/camps/comp-eng/)

# Arduino Project 1 - Stoplight

---

## Project Build

![Stoplight Picture](/assets/img/camp/stoplight.png)

## Circuit

![Stoplight Circuit](/assets/img/camp/stoplight-circuit.png)

## Code

```cpp
// byte - small integer; can store numbers between -128 and 127
byte redPin = 13;
byte ylwPin = 12;
byte grnPin = 11;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(ylwPin, OUTPUT);
  pinMode(grnPin, OUTPUT);
}

void loop() {
  //red on
  digitalWrite(redPin, HIGH);
  digitalWrite(ylwPin, LOW);
  digitalWrite(grnPin, LOW);
  delay(2000);

  //green on
  digitalWrite(redPin, LOW);
  digitalWrite(ylwPin, LOW);
  digitalWrite(grnPin, HIGH);
  delay(1500);

  //yellow on
  digitalWrite(redPin, LOW);
  digitalWrite(ylwPin, HIGH);
  digitalWrite(grnPin, LOW);
  delay(500);
}
```