let stateName;
stateName = cp.getCurrentStateNameForSlideItem("button");

if (stateName == "Normal") {
    cp.changeState("button", "Active");
} else {
    cp.changeState("button", "Normal");
}