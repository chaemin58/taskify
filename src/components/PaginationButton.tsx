import Leftbtn from "@/assets/mydashboard/ic_left_arrow.svg";
import Rightbtn from "@/assets/mydashboard/ic_right_arrow.svg";

interface PaginationButtonProp {
  current: number;
  total: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

export function PaginationButton({
  current,
  total,
  onClickPrev,
  onClickNext,
}: PaginationButtonProp) {
  return (
    <div className="ml-auto flex gap-5 pt-5">
      <div>
        {" "}
        {current} of {total}
      </div>
      <button
        className="disabled:opacity-30"
        // eslint-disable-next-line react/jsx-handler-names
        onClick={onClickPrev}
        disabled={current === 1}
      >
        <Leftbtn />
      </button>
      <button
        className="disabled:opacity-30"
        // eslint-disable-next-line react/jsx-handler-names
        onClick={onClickNext}
        disabled={current === total - 1}
      >
        <Rightbtn />
      </button>
    </div>
  );
}
