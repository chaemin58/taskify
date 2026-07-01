import { MyDashboard } from "./_components/MyDashboard";

export default function MyDashboardPage() {
  return (
    <div className="mx-auto flex flex-col px-12.5">
      <h1 className="pt-6 pb-3.5 text-4xl font-bold">홈</h1>
      <MyDashboard />
    </div>
  );
}
