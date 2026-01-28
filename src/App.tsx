import { Header } from "./components/Header";
import { ChatInterface } from "./pages/ChatInterface";

const App = () => (
  <div className="flex flex-col h-screen">
    <div className="h-4">
      <Header />
    </div>
    <div className="flex-1 flex flex-col">
      <ChatInterface />
    </div>
  </div>
);

export default App;
