import { useRouter } from "next/navigation";

import CrownIcon from "@/assets/crown_icon.svg";
import Colorchip from "@/assets/dashboard/ic-colorchips.svg";

interface SideButtonProps {
  id: number;
  title: string;
  color: string;
  createdByMe: boolean;
}

export function SideButton({ id, title, color, createdByMe }: SideButtonProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/dashboard/${id}`)}
      className="flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-4 transition-colors duration-300 ease-in-out hover:bg-[#2C2B30]"
    >
      <div className="flex items-center justify-center gap-2">
        <Colorchip style={{ color }} width={24} height={24} />
        <span className="text-white">{title}</span>
      </div>
      {createdByMe && <CrownIcon className="fill-brand-700 h-5 w-5" />}
    </div>
  );
}
