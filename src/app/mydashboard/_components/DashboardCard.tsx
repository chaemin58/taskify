"use client";

import Colorchip from "@/assets/dashboard/ic-colorchips.svg";
import RightArrow from "@/assets/mydashboard/ic_right_arrow.svg";

import Link from "next/link";

interface DashboardCardProps {
  title: string;
  dashboardId: number;
}
export function DashboardCard({ title, dashboardId }: DashboardCardProps) {
  return (
    <Link
      href={`/dashboard${dashboardId}`}
      className="bg-black-700 relative flex h-20 w-full max-w-89 min-w-55 items-center justify-between rounded-3xl border border-gray-800 p-5"
    >
      <div className="flex items-center justify-center">
        <Colorchip className="fill-red w-6" /> {title}
      </div>
      <RightArrow className="cursor-pointer" />
    </Link>
  );
}
