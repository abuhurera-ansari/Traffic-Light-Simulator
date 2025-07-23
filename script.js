document.addEventListener("DOMContentLoaded", () => {
  const lights = {
    red: document.querySelector(".red"),
    yellow: document.querySelector(".yellow"),
    green: document.querySelector(".green"),
  };

  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");
  const textDisplay = document.getElementById("text");

  let intervalId = null;
  let currentLight = null;

  const cycleLights = () => {
    // Turn off all lights
    Object.values(lights).forEach((light) => light.classList.remove("active"));

    if (currentLight === "red") {
      lights.red.classList.add("active");
      textDisplay.textContent = "Stop!";
      setTimeout(() => (currentLight = "yellow"), 2000);
    } else if (currentLight === "yellow") {
      lights.yellow.classList.add("active");
      textDisplay.textContent = "Wait!";
      setTimeout(() => (currentLight = "green"), 1000);
    } else if (currentLight === "green") {
      lights.green.classList.add("active");
      textDisplay.textContent = "Go!";
      setTimeout(() => (currentLight = "red"), 2000);
    }
  };

  const startSimulation = () => {
    if (!intervalId) {
      currentLight = "red"; // Start with red
      cycleLights();
      intervalId = setInterval(cycleLights, 2000); // Full cycle: 2s red + 1s yellow + 2s green
    }
  };

  const stopSimulation = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      // Turn off all lights
      Object.values(lights).forEach((light) =>
        light.classList.remove("active")
      );
    }
    textDisplay.textContent = ""; // Clear the text display
  };

  startBtn.addEventListener("click", startSimulation);
  stopBtn.addEventListener("click", stopSimulation);
});
