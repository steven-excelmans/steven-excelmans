import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.store("window", {
  isRetina: false,
  onLoad() {
    this.watchDevicePixelRatio();
  },
  onResize() {
    this.watchDevicePixelRatio();
  },
  onScroll() {
    this.animateHeroSkew();
    this.animateHeroText();
  },
  watchDevicePixelRatio() {
    this.isRetina = window.devicePixelRatio >= 2;
  },
  animateHeroSkew() {
    const skewLeft = document.querySelector(".hero__skew-left") as HTMLElement;
    const skewRight = document.querySelector(".hero__skew-right") as HTMLElement;
    const skewValueLeft = 15 + window.scrollY / -30;
    const skewValueRight = -15 + window.scrollY / 30;

    skewLeft.style.transform = "skewY(" + skewValueLeft + "deg)";
    skewRight.style.transform = "skewY(" + skewValueRight + "deg)";
  },
  animateHeroText() {
    const heroText = document.querySelector(".hero__text") as HTMLElement;

    let opacity = (100 - window.scrollY / 3.75) / 100;
    heroText.style.opacity = "" + opacity;
  },
});

Alpine.start();
