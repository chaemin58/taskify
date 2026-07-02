import Link from "next/link";

import IcHome from "@/assets/common/ic-home.svg";

function SideHomeButton() {
  return (
    <Link href={"/mydashboard"}>
      <div className="flex items-center gap-2 rounded-xl px-3.5 py-4 transition-colors duration-300 ease-in-out hover:bg-[#2C2B30]">
        <IcHome className="h-6 w-6" aria-label="홈 로고" />
        <span className="text-lg font-medium text-gray-200">홈</span>
      </div>
    </Link>
  );
}

export { SideHomeButton };
