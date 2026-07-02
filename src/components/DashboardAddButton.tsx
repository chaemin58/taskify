"use client";

import { useRouter } from "next/navigation";

import IcPlus from "@/assets/common/ic-plus.svg";

export function DashboardAddButton() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/new-dashboard")}
      className="flex cursor-pointer items-center justify-between rounded-xl px-3.5 py-4 transition-colors duration-300 ease-in-out hover:bg-[#2C2B30]"
    >
      <span className="text-base font-bold text-gray-400">대시보드 추가</span>
      <IcPlus aria-label="대시보드 추가 아이콘" />
    </div>
  );
}
