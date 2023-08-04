const mainTheme = {
  background: "#F1F1F1",
  foreground: "#FFFFFF",
  primaryColor: "#3498DB",
  secondaryColor: "#2ECC71",
  textColor: "#333333",
  accentColor: "#FF9F40",
  inputBorderColor: "#92BFDD",
  errorColor: "#E74C3C",
  warningColor: "#F39C12",
  successColor: "#27AE60",
  disabledColor: "#BDC3C7",
  noteColor: "#959595",
  cardColor: {
    defaultColor: "#919191",
    hoverCardColor: "#FFFACD",
    activeCardColor: "#FFFF00",
  },
  header: {
    background: "#F0F0F0",
    color: "#5A5A5A",
  },
  button: {
    ok: {
      background: "#2185D0",
      color: "#FFF",
    },
    cancel: {
      background: "#E0E1E2",
      color: "#929393",
    },
  },
  sidebar: {
    background: "#FFF",
    links: {
      background: "#E5E8EC",
      color: "#475F7B",
    },
    width: "350px",
    header: {
      background: "#F0F0F0",
      color: "#5A5A5A",
    },
  },
};

const memoryTypes = {
  stats: {
    background: "#F5F5F5",
    color: "#555555",
  },
  cards: {
    background: "#F3D3D3",
    color: "#DE3228",
  },
  images: {
    background: "#FEF5DA",
    color: "#FBBD1F",
  },
  internationalNames: {
    background: "#F4F7DD",
    color: "#B5CC18",
  },
  names: {
    background: "#DEF5E3",
    color: "#36BA45",
  },
  numbers: {
    background: "#DEEDF8",
    color: "#2185D1",
  },
  words: {
    background: "#F1E1F7",
    color: "#A336D1",
  },
};

export { mainTheme, memoryTypes };
