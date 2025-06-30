import * as React from "react";
import {
  RecoilRoot,
} from "recoil";
import { Container } from "react-bootstrap";
import GuidTable from "./GuidTable.jsx";
import GuidForm from "./GuidForm.jsx";
import Title from "./Title.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Container>
          <Title />
          <GuidForm />
          <GuidTable />
        </Container>
      </RecoilRoot>
    </div>
  );
}

export default App;