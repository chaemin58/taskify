import { InvitedDashboard } from "./_components/InvitedDashboard";
import { MyDashboard } from "./_components/MyDashboard";

export default function MyDashboardPage() {
  return (
    <div className="mx-auto flex flex-col gap-6 px-4 lg:px-12.5">
      <h1 className="py-2.5 text-2xl font-bold lg:py-6 lg:text-4xl">홈</h1>
      <MyDashboard />
      <InvitedDashboard />
    </div>
  );
}
