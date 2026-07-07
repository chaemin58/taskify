"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { ColumnPlusButton } from "./ColumnPlusButton";
import { ColumnList } from "./ColumnList";
import { ColumnList as Column } from "../page";
import { ColumnButtonList } from "./ColumnButtonList";
import { useRouter } from "next/navigation";

interface MoblieColumnListProps {
  columnList: Column[];
  dashboardId: number;
}

export function MoblieColumnList({ columnList, dashboardId }: MoblieColumnListProps) {

  const [activeCol, setActiveCol] = useState<Column | undefined>(columnList[0]);

  return (
    <div className="flex w-full flex-col justify-center gap-5 lg:hidden">
      <div className="flex w-full items-center max-lg:mx-7.5 max-md:mx-5 lg:hidden [&::-webkit-scrollbar]:hidden">
        <ColumnButtonList
          columnList={columnList}
          activeCol={activeCol}
          onTabSwitch={setActiveCol}
        />
      </div>
      {activeCol ? (
        <div className="flex flex-col max-lg:w-full max-lg:px-7.5 max-md:px-0">
          <ColumnList key={activeCol.id} column={activeCol} />
          <ColumnPlusButton id={dashboardId} />
        </div>
      ) : (
        <div className="text-gray-400">컬럼 데이터가 없습니다.</div>
      )}
    </div>
  );

























}