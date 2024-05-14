"use client";
import { useTheme } from "next-themes";

const SwitchThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = () => {
    if(theme === 'light') {
        setTheme('dark')
        return;
    }
    setTheme('light')
  }
  return (
    <div className="fixed top-5 right-5 z-10">
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div
          onClick={handleChangeTheme}
          className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-primary-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-primary-100 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-primary-700 peer-checked:bg-gray-300"
        ></div>
      </label>
    </div>
  );
};

export default SwitchThemeButton;
