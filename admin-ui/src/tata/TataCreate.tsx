import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BlaBlaTitle } from "../blaBla/BlaBlaTitle";

export const TataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="blabla.id" reference="BlaBla" label="Todo">
          <SelectInput optionText={BlaBlaTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
