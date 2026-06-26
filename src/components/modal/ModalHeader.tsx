import IcBack from "@/assets/ic-back.svg";

import { ModalCloseButton } from "./ModalCloseButton";

interface ModalHeaderProps {
  children: string;
  isPasswordView?: boolean;
  onBack?: () => void;
}

export function ModalHeader({
  children,
  isPasswordView,
  onBack: handleBack,
}: ModalHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {isPasswordView && (
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center justify-center transition-opacity hover:opacity-70"
          >
            <IcBack width={24} height={24} aria-label="뒤로가기" />
          </button>
        )}
        <h1 className="text-2xl font-bold text-gray-300 max-md:text-xl md:text-2xl">
          {children}
        </h1>
      </div>
      <ModalCloseButton />
    </div>
  );
}
