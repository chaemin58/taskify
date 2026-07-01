"use client";

import { Button } from "@/components/Button";
import { ProfileWrapper } from "@/components/profile/Profile";

interface InvitedDashboardCardProps {
  title: string;
  name: string;
  id: number;
  onClickDismiss: (id: number) => void;
  onClickAccept: (id: number) => void;
}
export function InvitedDashboardCard({
  title,
  name,
  id,
  onClickDismiss,
  onClickAccept,
}: InvitedDashboardCardProps) {
  return (
    <div className="flex flex-col justify-between gap-1 px-2.5 pt-4 pb-4.5 md:flex-row">
      <div className="w-75">{title}</div>
      <div className="flex items-center justify-between">
        <div className="w-50">
          <ProfileWrapper name={name} />
        </div>
        <div className="flex w-32.5 gap-3">
          <Button
            size="sm"
            colorType="secondary"
            onClick={() => onClickDismiss(id)}
          >
            거절
          </Button>
          <Button size="sm" onClick={() => onClickAccept(id)}>
            수락
          </Button>
        </div>
      </div>
    </div>
  );
}
