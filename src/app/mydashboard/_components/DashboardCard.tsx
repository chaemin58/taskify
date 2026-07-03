"use client";

import Link from "next/link";

import RightArrow from "@/assets/mydashboard/ic_right_arrow.svg";
import { DashboardTag } from "@/components/DashboardTag/DashboardTag";

interface DashboardCardProps {
  title: string;
  dashboardId: number;
  color: string;
}
export function DashboardCard({
  title,
  dashboardId,
  color,
}: DashboardCardProps) {
  return (
    <Link
      href={`/dashboard/${dashboardId}`}
      className="bg-black-700 relative flex h-20 w-full max-w-89 min-w-55 items-center justify-between rounded-3xl border border-gray-800 p-5"
    >
      <DashboardTag title={title} color={color} size={24} />
      <RightArrow className="cursor-pointer" />
    </Link>
  );
}
