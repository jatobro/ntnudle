import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const LightSwitch = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark);
    },
  );
  const [isDark, setIsDark] = useState(systemPrefersDark);
  return (
    <div>
      <input
        type="checkbox"
        name="light-switch"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />
      <label htmlFor="light-theme">{isDark ? "🌙" : "🔆"}</label>
    </div>
  );
};
