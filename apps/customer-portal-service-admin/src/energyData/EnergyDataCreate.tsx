import * as React from "react";
import { Create, SimpleForm, CreateProps } from "react-admin";

export const EnergyDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
      </SimpleForm>
    </Create>
  );
};
