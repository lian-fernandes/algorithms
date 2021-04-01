function formatDuration(seconds) {
  let timeComponents = [];
  let formatedArray = [];
  if (seconds === 0) {
    return "now";
  } else {
    const y = Math.floor(seconds / 31536000);
    const d = Math.floor((seconds % 31536000) / 86400);
    const h = Math.floor((seconds % 86400) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.round(seconds % 60);
    timeComponents = [
      { value: y, unity: "year" },
      { value: d, unity: "day" },
      { value: h, unity: "hour" },
      { value: m, unity: "minute" },
      { value: s, unity: "second" },
    ];
    const compList = timeComponents.filter((comp) => {
      return comp.value > 0;
    });

    compList.map((comp) => {
      formatedArray.push(
        String(comp.value) + " " + comp.unity + (comp.value > 1 ? "s" : "")
      );
    });
    for (i = 0; i < formatedArray.length - 2; i++) {
      formatedArray[i] = formatedArray[i] + ",";
    }

    if (formatedArray.length < 2) {
      return formatedArray[0];
    } else {
      formatedArray.splice(formatedArray.length - 1, 0, "and");
      return formatedArray.join(" ");
    }
  }
}

console.log(formatDuration(32199540));
