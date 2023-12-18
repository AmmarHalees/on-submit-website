//// Select.tsx

export default function Select({
  label,
  value,
  onChange,
  name,
  isInvalid,
  errorMessage,
}: {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  type?: string;
  placeholder?: string;
  isInvalid?: boolean;
  errorMessage?: string;
}) {
  const services = [
    {
      id: "data_analytics",
      name: "Data Analytics",
    },

    {
      id: "data_engineering",
      name: "Data Engineering",
    },

    {
      id: "data_science",
      name: "Data Science",
    },

    {
      id: "machine_learning",
      name: "Machine Learning",
    },

    {
      id: "data_visualization",
      name: "Data Visualization",
    },

    {
      id: "data_mining",
      name: "Data Mining",
    },

    {
      id: "data_warehousing",
      name: "Data Warehousing",
    },

    {
      id: "data_architecture",
      name: "Data Architecture",
    },

    {
      id: "data_modeling",
      name: "Data Modeling",
    },

    {
      id: "data_migration",
      name: "Data Migration",
    },

    {
      id: "data_cleaning",
      name: "Data Cleaning",
    },

    {
      id: "data_integration",
      name: "Data Integration",
    },

    {
      id: "data_consulting",
      name: "Data Consulting",
    },

    {
      id: "data_automation",
      name: "Data Automation",
    },

    {
      id: "data_warehouse",
      name: "Data Warehouse",
    },

    {
      id: "data_pipeline",
      name: "Data Pipeline",
    },

    {
      id: "data_lake",
      name: "Data Lake",
    },

    {
      id: "data_catalog",
      name: "Data Catalog",
    },
  ];
  return (
    <legend>
      <label htmlFor={name} className="text-sm font-semibold text-gray-600">
        {label}
      </label>
      <select
        className={`w-full p-2 border ${
          isInvalid ? "border-red-400" : "border-gray-200"
        }   rounded-md`}
        name={name}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      >
        {services.map((service) => (
          <option key={service.id} value={service.id}>
            {service.name}
          </option>
        ))}
      </select>

      {isInvalid && <p className="text-xs mt-1 text-red-400">{errorMessage}</p>}
    </legend>
  );
}
