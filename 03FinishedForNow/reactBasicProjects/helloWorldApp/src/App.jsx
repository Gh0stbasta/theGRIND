import TextCard from "./components/TextCard.jsx";

const helloWorlds = [
  "Hello, World!", // English
  "Hola, Mundo!", // Spanish
  "Bonjour, le Monde!", // French
  "Hallo, Welt!", // German
  "Ciao, Mondo!", // Italian
  "Olá, Mundo!", // Portuguese
  "Привет, мир!", // Russian
  "こんにちは、世界！", // Japanese
  "你好，世界！", // Chinese
  "안녕하세요, 세계!" // Korean
];

const App = () => {
  return (
    <>
      {helloWorlds.map((language, i) => {
        return <TextCard key={i} text={i+1 + ". " + language} />;
      })}
    </>
  );
};

export default App;
