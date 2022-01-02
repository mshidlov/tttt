import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BLABLA_TITLE_FIELD } from "../blaBla/BlaBlaTitle";

export const TataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tatas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Todo" source="blabla.id" reference="BlaBla">
          <TextField source={BLABLA_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
