export default function ThemeSwitcher({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="theme-switcher"
    >
      {theme === "light" ? "Modo Escuro" : "Modo Claro"}
    </button>
  );
}
