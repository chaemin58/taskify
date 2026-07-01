"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { getMyInvitationList } from "@/api/data";

import { useAcceptInvitationMutation } from "../hooks/useInvitations";

import { Emptydashboard } from "./Emptydashboard";
import { InvitedDashboardCard } from "./InvitedDashboardCard";
import { SearchInvitedListInput } from "./SearchInvitedInput";

export function InvitedDashboard() {
  const {
    data,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["invitedDashboard"],
    queryFn: ({ pageParam }) =>
      getMyInvitationList({
        size: 2,
        cursorId: pageParam,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.cursorId ?? undefined,
  });

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage();
    },
  });

  const { mutate: acceptInvitation } = useAcceptInvitationMutation();

  const handleClickDismiss = (id: number) => {
    acceptInvitation({
      invitationId: id,
      data: { inviteAccepted: false },
    });
  };

  const handleClickAccept = (id: number) => {
    acceptInvitation({
      invitationId: id,
      data: { inviteAccepted: true },
    });
  };

  const invitedDashboardList = data?.pages.flatMap((p) => p.invitations) ?? [];

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <p>에러 발생</p>;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 md:gap-5 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-lg font-bold">초대 받은 대시보드</h1>
          <SearchInvitedListInput />
        </div>
        {invitedDashboardList.length === 0 && (
          <Emptydashboard dashtype="invite" />
        )}
        {invitedDashboardList.length > 0 &&
          invitedDashboardList.map((dashboard) => (
            <InvitedDashboardCard
              key={dashboard.id}
              title={dashboard.dashboard.title}
              name={dashboard.inviter.nickname}
              id={dashboard.id}
              onClickDismiss={handleClickDismiss}
              onClickAccept={handleClickAccept}
            />
          ))}
      </div>
      <div ref={ref} className="h-1" />
    </div>
  );
}
