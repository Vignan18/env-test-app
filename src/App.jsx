function App() {
  console.log("import.meta.env:");
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>React Env Variable Test check</h2>
      <p><b>Mode:</b> {import.meta.env.MODE}</p>
      <p><b>VITE_APP_MODE:</b> {import.meta.env.VITE_APP_MODE}</p>
      <p><b>VITE_APP_NAME:</b> {import.meta.env.VITE_APP_NAME}</p>
      <p><b>VITE_SECRET_KEY:</b> {import.meta.env.VITE_SECRET_KEY}</p>
    </div>
  );
}

export default App;
