"use client";

import { Input } from "@/components/input/input";

export function SearchInvitedListInput() {
  return (
    <Input className="w-full lg:w-88">
      <Input.Wrapper>
        <Input.SearchIcon />
        <Input.Field
          id="invitedSearch"
          placeholder="검색어를 입력해주세요."
          // value={searchWord}
          // onChange={handleFieldChange}
          // onBlur={handleFieldBlur}
        />
      </Input.Wrapper>
      <Input.Error />
    </Input>
  );
}
