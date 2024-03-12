function MyButton() {
  return (
    <button>
      Eu sou um botão muito tímido
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to the jungle</h1>
      <MyButton />
      <h1>Welcome to the mato</h1>
      <MyButton />
      <h1>Welcome to the end</h1>
      <MyButton />
    </div>
  );
}