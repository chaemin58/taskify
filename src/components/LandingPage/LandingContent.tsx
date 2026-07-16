import { LoginSignup } from "./LoginSignup";
import { Point1 } from "./Point1";
import { Point2 } from "./Point2";
import { Point3 } from "./Point3";

export function LandingContent() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#161519] font-[family-name:var(--font-pretendard)] text-white">
      <LoginSignup />
      <Point1 />
      <Point2 />
      <Point3 />
    </main>
  );
}
