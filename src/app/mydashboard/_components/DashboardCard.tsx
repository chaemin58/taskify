import Colorchip from "@/assets/dashboard/ic-colorchips.svg";
import RightArrow from "@/assets/mydashboard/ic_right_arrow.svg";
import SquarePlus from "@/assets/squareplus-icon.svg";

interface DashboardCardProps {
  type: "addDash" | "dashboardCard";
}
export function DashboardCard({ type = "addDash" }: DashboardCardProps) {
  if (type === "addDash") {
    return (
      <div className="bg-black-700 flex h-20 max-w-89 items-center justify-center rounded-3xl border-2 border-dashed border-gray-800 p-5">
        <button
          className="absolute inset-0 h-full w-full cursor-pointer rounded-3xl"
          aria-label="포트폴리오 열기"
        />
        <div className="flex items-center justify-center">새로운 대시보드</div>
        <SquarePlus className="m-2" />
      </div>
    );
  } else {
    return (
      <div className="bg-black-700 flex h-20 max-w-89 items-center justify-between rounded-3xl border border-gray-800 p-5">
        <button
          className="absolute inset-0 h-full w-full cursor-pointer rounded-3xl"
          aria-label="포트폴리오 열기"
        />
        <div className="flex items-center justify-center">
          <Colorchip className="fill-red w-6" /> 포트폴리오
        </div>
        <RightArrow className="cursor-pointer" />
      </div>
    );
  }
}
