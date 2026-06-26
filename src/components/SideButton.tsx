import { useRouter } from "next/navigation";
import * as React from "react";

import IcCrown from "@/assets/common/ic-crown.svg";
import ColorChipsBlue from "@/assets/dashboard/colorchips-blue.svg";
import ColorChipsGreen from "@/assets/dashboard/colorchips-green.svg";
import ColorChipsOrange from "@/assets/dashboard/colorchips-orange.svg";
import ColorChipsRed from "@/assets/dashboard/colorchips-red.svg";
import ColorChipsYellow from "@/assets/dashboard/colorchips-yellow.svg";

const CHIP_COMPONENT_MAP: Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  "#206e4e": ColorChipsGreen,
  "#ae2e24": ColorChipsRed,
  "#1458bc": ColorChipsBlue,
  "#bd8c00": ColorChipsYellow,
  "#9f4b00": ColorChipsOrange,
};

interface SideButtonProps {
  id: number;
  title: string;
  color: string;
  createdByMe: boolean;
}

export function SideButton({ id, title, color, createdByMe }: SideButtonProps) {
  const ChipComponent = CHIP_COMPONENT_MAP[color] ?? ColorChipsGreen;
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/dashboard/${id}`)}
      className="flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-4 transition-colors duration-300 ease-in-out hover:bg-[#2C2B30]"
    >
      <div className="flex items-center justify-center gap-2">
        <ChipComponent width={24} height={24} aria-label={`${color} 컬러칩`} />
        <span className="text-white">{title}</span>
      </div>
      {createdByMe && <IcCrown className="h-6 w-6" aria-label="왕관 아이콘" />}
    </div>
  );
}
