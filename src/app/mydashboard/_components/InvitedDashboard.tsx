"use client";

import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

import { getMyInvitationList } from "@/api/data";
import { useDebounce } from "@/hooks/useDebounce";

import { useAcceptInvitationMutation } from "../hooks/useInvitations";

import { Emptydashboard } from "./Emptydashboard";
import { InvitedDashboardCard } from "./InvitedDashboardCard";
import { InvitedHeader } from "./InvitedHeader";
import { SearchInvitedListInput } from "./SearchInvitedInput";

export function InvitedDashboard() {
  const [serachWord, setSearchWord] = useState<string>("");
  const debouncedSearchWord = useDebounce(serachWord, 300);

  const {
    data,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["invitedDashboard", debouncedSearchWord],
    queryFn: ({ pageParam }) =>
      getMyInvitationList({
        size: 2,
        cursorId: pageParam,
        title: debouncedSearchWord,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.cursorId ?? undefined,
    placeholderData: keepPreviousData,
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

  const handleFieldChange = (e: React.FocusEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const invitedDashboardList = data?.pages.flatMap((p) => p.invitations) ?? [];

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <p>에러 발생</p>;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        {invitedDashboardList.length === 0 && debouncedSearchWord === "" && (
          <Emptydashboard dashtype="invite" />
        )}
        {(invitedDashboardList.length > 0 || debouncedSearchWord !== "") && (
          <div className="flex flex-col">
            <div className="mb-4 flex flex-col gap-3 md:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="text-lg font-bold">초대 받은 대시보드</h1>
              <SearchInvitedListInput
                searchWord={serachWord}
                onFieldChange={handleFieldChange}
              />
            </div>
            {invitedDashboardList.length === 0 ? (
              <p className="py-4 text-center">검색 결과가 없습니다.</p>
            ) : (
              <>
                <InvitedHeader />
                {invitedDashboardList.map((dashboard) => (
                  <InvitedDashboardCard
                    key={dashboard.id}
                    title={dashboard.dashboard.title}
                    name={dashboard.inviter.nickname}
                    id={dashboard.id}
                    onClickDismiss={handleClickDismiss}
                    onClickAccept={handleClickAccept}
                  />
                ))}
              </>
            )}
          </div>
        )}
      </div>
      <div ref={ref} className="h-1" />
    </div>
  );
}
