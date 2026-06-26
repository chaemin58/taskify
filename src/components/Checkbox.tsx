import React from "react";

import CheckboxChecked from "@/assets/ic-checked.svg";
import CheckboxUnchecked from "@/assets/ic-unchecked.svg";

interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
}

export function Checkbox({
  checked,
  onChange: handleChange,
  description,
}: CheckboxProps) {
  return (
    <div className="flex cursor-pointer items-center gap-2">
      <input
        type="checkbox"
        className="hidden"
        id="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className="mr-2 block h-6 w-6 cursor-pointer">
        {checked ? (
          <CheckboxChecked className="h-6 w-6" aria-label="체크됨" />
        ) : (
          <CheckboxUnchecked className="h-6 w-6" aria-label="체크 안됨" />
        )}
      </label>
      <label htmlFor="checkbox" className="text-gray-300">
        {description}
      </label>
    </div>
  );
}
