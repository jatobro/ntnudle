import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const LightSwitch = () => {
  const systemPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(systemPrefersDark);
  }, [systemPrefersDark]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div>
      <input
        id="light-switch"
        className="sr-only"
        type="checkbox"
        name="light-switch"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />
      <label className="h-14 w-14 text-xl" htmlFor="light-switch">
        {isDark ? "🌙" : "🔆"}
      </label>
    </div>
  );
};
