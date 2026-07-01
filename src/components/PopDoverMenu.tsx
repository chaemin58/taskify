"use client";

import { useState } from "react";

import IcDelete from "@/assets/common/ic-delete.svg";
import IcEdit from "@/assets/common/ic-edit.svg";

interface PopDoverMenuProps {
  onEdit: () => void;
  onDelete: () => void;
}

export function PopDoverMenu({
  onEdit: handleEdit,
  onDelete: handleDelete,
}: PopDoverMenuProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleClickEdit = () => {
    handleEdit();
    setIsVisible(false);
  };

  const handleClickDelete = () => {
    handleDelete();
    setIsVisible(false);
  };
  return (
    <div className="border-stroke absolute top-5 right-0 z-10 mt-2 w-35 rounded-xl border bg-[#2F2F33] shadow-lg">
      <ul className="flex flex-col items-center justify-center text-sm text-gray-700">
        <li
          onClick={handleClickEdit}
          className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-t-xl px-5.5 pt-4 pb-2.5 transition-colors duration-300 hover:bg-gray-800"
        >
          <IcEdit height={20} width={20} aria-label="수정 버튼" />
          <span className="text-base text-white">수정하기</span>
        </li>

        <li
          onClick={handleClickDelete}
          className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-b-xl px-5.5 pt-2.5 pb-4 transition-colors duration-300 hover:bg-gray-800"
        >
          <IcDelete height={20} width={20} aria-label="삭제 버튼" />
          <span className="text-red text-base">삭제하기</span>
        </li>
      </ul>
    </div>
  );
}
