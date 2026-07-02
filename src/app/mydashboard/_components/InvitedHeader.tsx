export function InvitedHeader() {
  return (
    <div className="hidden h-11.75 items-center justify-between border-b border-[#333236] md:flex">
      <div className="w-75">이름</div>
      <div className="flex gap-25">
        <span className="w-28">초대자</span>
        <span className="w-31">수락 여부</span>
      </div>
    </div>
  );
}
