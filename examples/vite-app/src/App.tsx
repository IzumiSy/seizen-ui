import {
  useDataTable,
  useDataTableEvent,
  DataTable,
  type ColumnDef,
} from "@izumisy/seizen-datatable-react";
import { RowDetailPlugin } from "./plugins/RowDetailPlugin";
import {
  FileExportPlugin,
  CsvExporter,
  JsonlExporter,
  TsvExporter,
} from "./plugins/FileExportPlugin";
import { ColumnControlPlugin } from "./plugins/ColumnControlPlugin";
import { AllSlotsDemo } from "./plugins/AllSlotsPlugin";
import { data, type Person } from "./data";
import {
  StatusBadge,
  DepartmentBadge,
  AvatarName,
  SalaryCell,
  EmailCell,
  DateCell,
  LocationCell,
} from "./components/cells";

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ getValue }) => (
      <span style={{ color: "#9ca3af", fontFamily: "monospace" }}>
        #{String(getValue()).padStart(3, "0")}
      </span>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue }) => <AvatarName name={getValue() as string} />,
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ getValue }) => <EmailCell email={getValue() as string} />,
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: ({ getValue }) => (
      <DepartmentBadge department={getValue() as string} />
    ),
  },
  {
    accessorKey: "joinedAt",
    header: "Joined At",
    cell: ({ getValue }) => <DateCell date={getValue() as string} />,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ getValue }) => (
      <span style={{ fontStyle: "italic", color: "#4b5563" }}>
        {getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "salary",
    header: "Salary",
    cell: ({ getValue }) => <SalaryCell salary={getValue() as number} />,
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ getValue }) => <LocationCell location={getValue() as string} />,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => (
      <StatusBadge status={getValue() as Person["status"]} />
    ),
  },
];

function App() {
  const table = useDataTable({
    data,
    columns,
    plugins: [
      RowDetailPlugin.configure({
        width: 450,
      }),
      ColumnControlPlugin.configure({
        width: 400,
      }),
      FileExportPlugin.configure({
        width: 450,
        filename: "users",
        includeHeaders: true,
        exporters: [CsvExporter, JsonlExporter, TsvExporter],
      }),
      AllSlotsDemo.configure({
        sidepanelTitle: "All Slots Demo",
        enableCellHighlight: true,
        primaryColor: "#8b5cf6",
      }),
    ],
  });

  useDataTableEvent(table, "row-click", (row) => {
    // Open inline row when clicking a row
    table.plugin.open("all-slots-demo", { id: row.id });
  });

  return (
    <div className="p-5">
      <DataTable table={table} />
    </div>
  );
}

export default App;
