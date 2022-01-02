import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TATA_TITLE_FIELD } from "./TataTitle";
import { BLABLA_TITLE_FIELD } from "../blaBla/BlaBlaTitle";

export const TataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Todo" source="blabla.id" reference="BlaBla">
          <TextField source={BLABLA_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="User" target="TataId" label="Users">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Username" source="username" />
            <TextField label="Roles" source="roles" />
            <ReferenceField label="Tata" source="tata.id" reference="Tata">
              <TextField source={TATA_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
