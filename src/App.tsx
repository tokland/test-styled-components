import React, { FC } from "react";
import { Select } from "antd";
import { SelectProps } from "antd/lib/select";
import styled from "styled-components";
import "antd/dist/antd.css";

const { Option } = Select;

const StyledSelect = styled(Select)`
  color: red;
`;

function App() {
  return (
    <div>
      <StyledSelect<FC<SelectProps<string>>>
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={console.log}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </StyledSelect>
    </div>
  );
}

export default App;
