"use client";

import { Input } from "@/components/input/input";

export function SearchInvitedListInput() {
  return (
    <Input isDisabled className="max-md:gap-2.5">
      <Input.Wrapper>
        <Input.SearchIcon />
        <Input.Field placeholder="검색어를" />
      </Input.Wrapper>
    </Input>
  );
}
