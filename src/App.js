import React from "react";
import { Columns } from "react-bulma-components";

const App = () => {
  return (
    <div>
      <Columns gapless>
        <Columns.Column style={{ backgroundColor: "red", height: "100vh" }}>
          <p className="bd-notification is-success">First Column</p>
        </Columns.Column>
        <Columns.Column>
          <p className="bd-notification is-info"> Middle Column</p>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default App;
