import Image from "next/image";

export default function DrakLightMode({ toggleDarkMode }) {
  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? (
        <Image src="/icons/sun.svg" width="24" height="24" alt="sun" />
      ) : (
        <Image src="/icons/moon.svg" width="24" height="24" alt="moon" />
      )}
    </button>
  );
}
