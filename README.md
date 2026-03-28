# Martins Škoda
Martins Škoda is a humorous, interactive car adventure where players navigate the open road, upgrade their vehicle, and manage social interactions to reach peak coolness.

---

## Overview
In this game, you take control of a Škoda with one primary goal: filling the "Cool-o-meter." As you drive, you will encounter random items to upgrade your car and various characters—ranging from supportive friends to an aggressive grandmother—who will test your social skills and the reputation of your ride.

## Core Features
* **Dynamic Car Upgrades**: Install parts like spoilers, "Sota ruter," or a "svampebob wrapper" that affect your car's coolness and annoyance factors.
* **Social Interaction System**: Encounter different personalities (Martin, Terje, Bestemor) and choose the correct way to greet them to gain respect.
* **Real-time Statistics**: Track your progress through the Cool-o-meter, Annoyed-o-meter, and Speed-o-meter.
* **Adaptive Gameplay**: Your reputation and car's "coolness" determine how characters react to you during your journey.

## Installation and Technical Setup
The project is a lightweight web application built with a modular logic structure and a responsive front-end.

### Prerequisites
* A modern web browser (Google Chrome, Mozilla Firefox, or Microsoft Edge).

### Deployment Steps
1.  **Extract Files**: Download and unzip the project folder.
2.  **File Structure**: Ensure that `static/js` and `static/sass` folders are intact.
3.  **Launch**: Open the `index.html` file in your preferred web browser to start the game.

## Architecture
The application follows a clean separation of concerns to ensure maintainable code:
* **Model (modal.js)**: Manages data for car parts, character personalities, and the logic for random encounters.
* **View (view.js)**: Handles the visual rendering of the road, the vehicle, and dynamic status bars.
* **Controller (controller.js)**: Orchestrates the game flow, including speed calculations and handling player decisions.

## Contributors
Developed as an assignment for getAcademy by:
* Yaniss, Amy, Nicolay, and Kristoffer.

---
*Remember: Why drive a Škoda? Because sometimes, walking is the only other option.*
