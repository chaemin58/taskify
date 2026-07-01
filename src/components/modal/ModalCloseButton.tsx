"use client";

import { useRouter } from "next/navigation";

import IcX from "@/assets/common/ic-x.svg";

export function ModalCloseButton() {
  const router = useRouter();

  const handleCloseModal = (e: React.MouseEvent) => {
    router.back();
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <button
      type="button"
      onClick={handleCloseModal}
      className="relative h-6 w-6 transition-transform hover:scale-110 active:opacity-70"
    >
      <IcX height={24} width={24} aria-label="닫기 버튼" />
    </button>
  );
}
