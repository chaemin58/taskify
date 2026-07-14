import { cookies } from "next/headers";

export async function GET(request: Request) {
  //쿼리 파라미터 꺼내고 그 중 columnId 가져옴
  const { searchParams } = new URL(request.url);
  const columnId = searchParams.get("columnId");

  //컬럼아이디없으면 에러
  if (!columnId) {
    return Response.json(
      {
        message: "columnId가 필요합니다.",
      },
      { status: 400 }
    );
  }

  //AT 가져오고
  const token = (await cookies()).get("accessToken")?.value;

  //외부 api 호출
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cards?columnId=${columnId}&size=100`,
    {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }
  );

  if (!res.ok) {
    const error = await res.json();
    return Response.json(
      { message: error.message || "카드 조회 실패" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return Response.json(data);
}

