import { Button } from "@/components/Button";
import Link from "next/link";

export function NoCard({ id }: { id: number }) {
  return (
    <div className="m-auto flex flex-col gap-8 pt-15">
      <div className="text-black-500 text-md m-auto font-bold">
        아직 할 일이 없습니다.
      </div>
    </div>
  );
}
