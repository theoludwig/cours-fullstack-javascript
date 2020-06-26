import Counter from "./Counter";

const counter = new Counter(document.getElementById("counter-number"), 0, 1);
counter.add(document.getElementById("add-button"));
counter.subtract(document.getElementById("subtract-button"));
counter.reset(document.getElementById("reset-button"));
counter.changeStep(document.getElementById("step-input"));
