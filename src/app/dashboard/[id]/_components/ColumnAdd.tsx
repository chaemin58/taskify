import PlusBtn from "@/assets/common/ic-plus.svg";

export function ColumnAdd() {
  return (
    <div className="hidden h-15 min-w-50 gap-2 rounded-[18px] bg-gray-900 px-3.5 py-4 lg:flex">
      <PlusBtn />
      <div className="pl-1 text-[18px] font-medium text-white">
        새로운 컬럼 추가
      </div>
    </div>
  );
}
