import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home, CreateForm, FormPreview, ManageAccount } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="page-content header-space">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-form" element={<CreateForm />} />
            <Route path="/form-preview" element={<FormPreview />} />
            <Route path="/manage-account" element={<ManageAccount />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
