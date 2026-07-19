"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getDashboardList } from "@/api/data";
import { PaginationButton } from "@/components/PaginationButton";

import { useItemsPerPage } from "../hooks/useItemsPerPage";

import { AddDashboard } from "./AddDashboard";
import { DashboardCard } from "./DashboardCard";
import { Emptydashboard } from "./Emptydashboard";

const SIZE = 20;

export function MyDashboard() {
  const showItem = useItemsPerPage();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["dashboards"],
      queryFn: ({ pageParam }) =>
        getDashboardList({
          navigationMethod: "pagination",
          page: pageParam,
          size: SIZE,
        }),
      initialPageParam: 1,
      //다음 페이지 번호가 뭔지, fetchNextPage하면 pageParam으로 뭘 넘길지 정한다.
      getNextPageParam: (lastPage, allPages) => {
        const loaded = allPages.reduce(
          (sum, p) => sum + p.dashboards.length,
          0
        );
        // 아직 서버에 남은 게 있으면 다음 페이지 번호를, 없으면 undefined
        return loaded < lastPage.totalCount ? allPages.length + 1 : undefined;
      },
    });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <p>에러 발생</p>;

  const dashboardList = data?.pages.flatMap((p) => p.dashboards) ?? [];
  const total = data?.pages[0]?.totalCount ?? 0;

  const totalPage = Math.ceil((total + 1) / showItem);

  const handleClickNext = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
    setCurrentPage((prev) => prev + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const combinedStart = (currentPage - 1) * showItem;
  const isShowAddCard = combinedStart === 0;

  const start = Math.max(0, combinedStart - 1);
  const end = currentPage * showItem - 1;

  const visableDashboardList = dashboardList.slice(start, end);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg font-bold">내 대시보드</h2>
      {dashboardList.length === 0 && <Emptydashboard dashtype="my" />}
      {visableDashboardList.length > 0 && (
        <div className="flex gap-5">
          {isShowAddCard && <AddDashboard />}
          {visableDashboardList.map((dashboard) => (
            <DashboardCard
              title={dashboard.title}
              key={dashboard.id}
              dashboardId={dashboard.id}
              color={dashboard.color}
            />
          ))}
        </div>
      )}
      <PaginationButton
        total={totalPage}
        onClickPrev={handleClickPrev}
        onClickNext={handleClickNext}
        current={currentPage}
      />
    </div>
  );
}
