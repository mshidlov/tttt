import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BlaBlaTitle } from "../blaBla/BlaBlaTitle";

export const TataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="blabla.id" reference="BlaBla" label="Todo">
          <SelectInput optionText={BlaBlaTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
