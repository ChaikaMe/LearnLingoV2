export default function themePicker() {
  const themes = [
    "#F4C550",
    "#FBE9BA",
    "#9FBAAE",
    "#CBDED3",
    "#9FB7CE",
    "#BFD6EA",
    "#E0A39A",
    "#E0A39A",
    "#F2C0BD",
    "#F0AA8D",
    "#F4C8BA",
  ];
  const randomIndex = Math.floor(Math.random() * themes.length);

  return themes[randomIndex];
}
