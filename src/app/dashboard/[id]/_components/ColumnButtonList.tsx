import { Button } from "@/components/Button";
import { ColumnList } from "../page";

interface ColumnButtonListProps {
  columnList: ColumnList[];
  activeCol: ColumnList | undefined;
  onTabSwitch: (column: ColumnList) => void;
}

export function ColumnButtonList({
  columnList,
  activeCol,
  onTabSwitch,
}: ColumnButtonListProps) {
  return (
    <div className="flex w-full flex-1 items-center gap-2 overflow-scroll [-ms-overflow-style:none] [scrollbar-width:none]">
      {columnList.map((column) => (
        <Button
          key={column.id}
          size="xs"
          value={column.title}
          onClick={() => onTabSwitch(column)}
          className={`min-h-8 cursor-pointer w-25 rounded-4xl border border-gray-600 px-4 whitespace-nowrap transition-colors ${
            activeCol?.id === column.id
              ? "bg-green-500 text-white"
              : "bg-gray-900"
          }`}
        >
          {column.title}
        </Button>
      ))}
    </div>
  );






}