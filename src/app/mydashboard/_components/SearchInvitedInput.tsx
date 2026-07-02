"use client";

import { Input } from "@/components/input/input";

interface SearchInvitedListInputProps {
  searchWord: string;
  onFieldChange: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export function SearchInvitedListInput({
  searchWord,
  onFieldChange: handleFieldChange,
}: SearchInvitedListInputProps) {
  return (
    <Input className="w-full lg:w-88">
      <Input.Wrapper>
        <Input.SearchIcon />
        <Input.Field
          id="invitedSearch"
          placeholder="검색어를 입력해주세요."
          value={searchWord}
          onChange={handleFieldChange}
        />
      </Input.Wrapper>
      <Input.Error />
    </Input>
  );
}
