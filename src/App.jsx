import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import About from "./container/About/About";

import Contacts from "./container/Contacts/Contacts";
import Header from "./container/Header/Header";
import Services from "./container/Services/Services";

import Message from "./container/Message/Message";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Message />
      <About />

      <Services />

      <Contacts />
    </div>
  );
}
export default App;
