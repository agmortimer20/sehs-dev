---
container: "container"
layout: "../../../layouts/PageLayout.astro"
title: Project 3 - Reaction Game
---

[← Back](/camps/comp-eng/)

# Arduino Project 3 - Reaction Game

---

## Circuit

![Reaction Game Circuit](/assets/img/camp/reaction-game-circuit.png)

## Code

```cpp
unsigned int waitTime;   //random wait time before turning on LED
unsigned int startTime;  //zero reference time
unsigned int reactTime;  //calculated reaction time

void setup() {
  Serial.begin(9600);  //sets up serial
  pinMode(13, OUTPUT); //sets pin 13 as an OUTPUT for the stimulus LED
  pinMode(12, OUTPUT); //sets pin 12 as an OUTPUT for the green LED
  pinMode(11, OUTPUT); //sets pin 11 as an OUTPUT for the red LED 
  pinMode(3, INPUT);   //sets pin 3 as an INPUT for the button
}

void loop() {
    //prints the challenge instructions
  Serial.println("When the LED turns on, push the button!");
  Serial.println("Now, watch the LED. Ready?");
  waitTime = random(2000, 4000); //random wait time from 2000 to 4000 ms
  delay(waitTime);  //delay random wait time
  
  //turn on the LED!
  digitalWrite(13, HIGH);    

  startTime = millis();  //set zero time reference

  //loop to wait until button is pressed
  while(digitalRead(3) == HIGH) { 
  }

  reactTime = millis() - startTime; //calculation of reaction time
  
  digitalWrite(13, LOW);  //turn off LED!

  if (reactTime <= 215) {
    digitalWrite(12, HIGH);  //green LED ON
    digitalWrite(11, LOW);   //red LED OFF
  }
  else {
    digitalWrite(12, LOW);   //green LED OFF
    digitalWrite(11, HIGH);  //red LED ON
  }
  
  //display information to Serial Monitor 
  Serial.print("Nice job! Your reaction time was");
  Serial.print(reactTime);
  Serial.println("milliseconds");
  delay(1000);    //short delay before starting again 
}
```