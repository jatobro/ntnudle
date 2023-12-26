import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const LightSwitch = () => {
  const systemPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  const [isDark, setIsDark] = useState(true);

  const tailwindDarkToggler = (dark: boolean) =>
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

  useEffect(() => {
    setIsDark(systemPrefersDark);

    tailwindDarkToggler(systemPrefersDark);
  }, [systemPrefersDark]);

  useEffect(() => {
    tailwindDarkToggler(isDark);
  }, [isDark]);

  const { isSignedIn } = useUser();

  return (
    <div>
      <input
        id="light-switch"
        className="sr-only"
        type="checkbox"
        name="light-switch"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
        disabled={!isSignedIn}
      />
      <label className="h-14 w-14 text-xl" htmlFor="light-switch">
        {isSignedIn ? (isDark ? "🌙" : "🔆") : ""}
      </label>
    </div>
  );
};
