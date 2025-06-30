import * as React from "react";
import {
  RecoilRoot,
} from "recoil";
import { Container } from "react-bootstrap";
import GuidTable from "./GuidTable.js";
import GuidForm from "./GuidForm.js";
import Title from "./Title.js";
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