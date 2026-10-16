"use client";

import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { putCardUpdate } from "@/api/data";
import { cardKeys, useCardListQuery } from "@/hooks/useCards";
import { Card, GetCardListResponse } from "@/types/api";

import { ColumnCard } from "./ColumnCard";
import { ColumnListHeader } from "./ColumnListHeader";
import { NoCard } from "./NoCard";

interface ColumnList {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  teamId: string;
}

export function ColumnList({ column }: { column: ColumnList }) {
  const queryClient = useQueryClient();

  const { title, id } = column;

  const params = useParams();
  const pathname = usePathname();
  const dashboardId =
    Number(params.dashboardId) || Number(pathname.split("/")[2]);

  const { data, isLoading } = useCardListQuery(id);

  const cardList = data?.cards ?? [];
  const totalCount = data?.totalCount ?? 0;

  //드래그 후 핸들러
  const handleDrag = async (e: React.DragEvent<HTMLDivElement>) => {
    const dragCardId = Number(e.dataTransfer.getData("cardId"));
    const startColumnId = Number(e.dataTransfer.getData("startColumnId"));

    if (startColumnId === id) return;

    //롤백 대비 스냅샷
    // const prevFrom = queryClient.getQueryData(cardKeys.list(startColumnId));
    // const prevTo = queryClient.getQueryData(cardKeys.list(id));

    let movedCard: Card | undefined;

    //드래그가 끝났을 때 실행할 이벤트 핸들러 | 먼저 제거하고
    //지금 drop이 일어난 컬럼id를 가져와서 캐시를 변경해야됨.
    queryClient.setQueryData(
      cardKeys.list(startColumnId),
      (old: GetCardListResponse) => {
        {
          //old가 없을 수도 있다는 방어 코드
          const base: GetCardListResponse = old ?? { cards: [], totalCount: 0 };
          //old 사이에서 변경이 일어난 카드 찾아 저장
          movedCard = base.cards.find((el) => el.id === dragCardId);
          const newCardList = base.cards.filter((el) => el.id !== dragCardId);
          return {
            ...base,
            cards: newCardList,
            totalCount: base.totalCount - 1,
          };
        }
      }
    );

    if (!movedCard) return;

    //이제 movedCard 카드 추가
    queryClient.setQueryData(cardKeys.list(id), (old: GetCardListResponse) => {
      {
        const base: GetCardListResponse = old ?? { cards: [], totalCount: 0 };

        return {
          ...base,
          cards: [...base.cards, movedCard],
          totalCount: base.totalCount + 1,
        };
      }
    });

    try {
      await putCardUpdate(dragCardId, {
        columnId: id,
        title: movedCard.title,
        description: movedCard.description,
        ...(movedCard?.assignee?.id && {
          assigneeUserId: movedCard.assignee.id,
        }),
        ...(movedCard.dueDate && { dueDate: movedCard.dueDate }),
        ...(movedCard.tags && { tags: movedCard.tags }),
        ...(movedCard.imageUrl && { imageUrl: movedCard.imageUrl }),
      });
    } catch {
      //역연산 롤백
      const dropColumn = queryClient.getQueryData<GetCardListResponse>(
        cardKeys.list(id)
      );

      // 조건 확인
      if (dropColumn?.cards.some((card) => card.id === dragCardId)) {
        //조건에 맞으면 롤백 시작
        queryClient.setQueryData(
          cardKeys.list(startColumnId),
          (old: GetCardListResponse) => ({
            ...old,
            cards: [...old.cards, movedCard],
            totalCount: old.totalCount + 1,
          })
        );
        queryClient.setQueryData(
          cardKeys.list(id),
          (old: GetCardListResponse) => ({
            ...old,
            cards: old.cards.filter((o) => o.id !== dragCardId),
            totalCount: old.totalCount - 1,
          })
        );
      }
      //롤백을 하거나 하지 않거나 서버 상태와 동기화
      queryClient.invalidateQueries({ queryKey: cardKeys.all });
      //사용자에게 명시해야한다고 생각하기 때문에 alert 창 선택
      alert("컬럼 변경에 실패했습니다. ");
    }
  };

  return (
    <div
      className="flex min-w-83.5 flex-col gap-5 max-lg:mx-0 max-lg:w-full"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrag(e)}
    >
      <ColumnListHeader
        title={title}
        contentCount={totalCount}
        columnId={id}
        dashboardId={dashboardId}
      />
      {isLoading ? (
        <SkeletonTheme baseColor="#2a2a2d" highlightColor="#3f3f46">
          <div className="flex flex-col gap-4">
            <Skeleton height={130} borderRadius={12} />
            <Skeleton height={130} borderRadius={12} />
          </div>
        </SkeletonTheme>
      ) : cardList.length === 0 ? (
        <NoCard />
      ) : (
        cardList.map((colCard) => (
          <Link
            href={`/card/${colCard.id}`}
            key={colCard.id}
            draggable={true}
            onDragStart={(e) => {
              e.dataTransfer.setData("cardId", String(colCard.id));
              e.dataTransfer.setData("startColumnId", String(id));
            }}
          >
            <ColumnCard
              cardTitle={colCard.title}
              duedate={colCard.dueDate}
              tags={colCard.tags}
              creator={colCard.assignee?.nickname}
              creatorImageUrl={colCard.assignee?.profileImageUrl}
              imgSrc={colCard.imageUrl}
            />
          </Link>
        ))
      )}
    </div>
  );
}
