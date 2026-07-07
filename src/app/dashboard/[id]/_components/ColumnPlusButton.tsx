import PlusBtn from "@/assets/common/ic-plus.svg";
import Link from "next/link";

interface ColumnPlusButtonProps {
  id: number;
}

export function ColumnPlusButton({ id }: ColumnPlusButtonProps) {
  return (
    <Link
      href={`/dashboard/${id}/column-add`}
      className="group fixed right-8 bottom-5 z-50 text-right"
    >
      <div className="relative flex h-15 w-15 cursor-pointer items-center justify-center rounded-full bg-green-500 text-5xl text-white hover:bg-gray-900">
        <div className="group relative flex h-10 w-10 cursor-pointer items-center justify-center transition-transform duration-200 hover:rotate-45">
          {/* 가로선 */}
          <div className="absolute h-0.5 w-5 rounded-full bg-current" />
          {/* 세로선 */}
          <div className="absolute h-5 w-0.5 rounded-full bg-current" />
        </div>
        <div className="invisible absolute right-0 bottom-full mb-2 cursor-default text-left text-base opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
          <ColumnAdd id={id} />
        </div>
      </div>
    </Link>
  );
}

function ColumnAdd({ id }: { id: number }) {
  return (
    <Link
      href={`/dashboard/${id}/column-add`}
      className="hidden h-15 min-w-50 items-center justify-center gap-2 rounded-[18px] bg-gray-900 lg:flex"
    >
      <PlusBtn />
      <div className="pl-1 text-[18px] font-medium text-white">
        새로운 컬럼 추가
      </div>
    </Link>
  );
}