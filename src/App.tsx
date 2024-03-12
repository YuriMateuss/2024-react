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
      <h1>Primeiro botão</h1>
      <MyButton />
      <h1>Segundo botão</h1>
      <MyButton />
      <h1>Último botão</h1>
      <MyButton />
    </div>
  );
}