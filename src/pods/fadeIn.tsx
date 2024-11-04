document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Define los umbrales para cada fadeIn
  const thresholds = [700, 1600, 2600, 3600];

  for (let index = 0; index < thresholds.length; index++) {
    const fadeElements = document.getElementsByClassName(`fadeIn${index}`);

    for (let i = 0; i < fadeElements.length; i++) {
      const fadeElement = fadeElements[i] as HTMLElement;

      // Verifica si el scroll ha alcanzado el umbral correspondiente
      if (scrollPosition > thresholds[index]) {
        fadeElement.classList.add("visible");
      } else {
        fadeElement.classList.remove("visible");
      }
    }
  }
});