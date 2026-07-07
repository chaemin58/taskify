import Link from "next/link";

import ChartIcon from "@/assets/mydashboard/chart.svg";
import MailIcon from "@/assets/mydashboard/MailIcon.svg";
import { Button } from "@/components/Button";

interface DashboardProps {
  dashtype: "my" | "invite";
}

export function Emptydashboard({ dashtype }: DashboardProps) {
  return (
    <div className="bg-black-800 flex h-fit w-full flex-col items-center justify-center gap-1 rounded-2xl border border-gray-700 py-5 md:gap-2 md:px-10 lg:gap-2.5 lg:py-10">
      {dashtype === "my" ? <ChartIcon /> : <MailIcon />}
      <div className="md:text-md text-sm text-gray-400 lg:text-lg">
        {dashtype === "my"
          ? "대시보드가 없습니다"
          : "아직 초대받은 대시보드가 없습니다."}
      </div>
      {dashtype === "my" && (
        <Link href={`/new-dashboard`}>
          <Button colorType="secondary" size="sm" className="px-2">
            <div className="flex items-center gap-1">
              생성하기
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-300 text-gray-700">
                +
              </div>
            </div>
          </Button>
        </Link>
      )}
    </div>
  );
}
