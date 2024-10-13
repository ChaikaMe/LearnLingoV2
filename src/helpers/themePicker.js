export default function themePicker() {
  const themes = [
    {
      standart: "#F4C550",
      bright: "#FBE9BA",
      mac: {
        start: "#EEB055",
        end: "#D08F38",
      },
    },
    {
      standart: "#9FBAAE",
      bright: "#CBDED3",
      mac: {
        start: "#295761",
        end: "#183E49",
      },
    },
    {
      standart: "#9FB7CE",
      bright: "#BFD6EA",
      mac: {
        start: "#314B6E",
        end: "#1F385A",
      },
    },
    {
      standart: "#E0A39A",
      bright: "#F2C0BD",
      mac: {
        start: "#B03F3E",
        end: "#982A27",
      },
    },
    {
      standart: "#F0AA8D",
      bright: "#F4C8BA",
      mac: {
        start: "#E17650",
        end: "#CA5B38",
      },
    },
  ];
  const randomIndex = Math.floor(Math.random() * themes.length);

  return themes[randomIndex];
}
