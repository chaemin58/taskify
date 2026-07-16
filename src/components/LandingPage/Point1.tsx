import Image from "next/image";

import ImgSection2 from "@/assets/landing/img-section2.svg?url";

export function Point1() {
  return (
    <section className="mx-auto flex max-w-fit flex-col items-start gap-10 px-6 py-12 md:px-0 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:py-24">
      <div className="relative order-2 h-62.5 w-full overflow-hidden transition-all duration-1000 md:h-112.5 lg:order-1 lg:w-100">
        <Image
          src={ImgSection2}
          fill
          alt="대시보드 상세 페이지 이미지"
          className="object-contain object-center"
          sizes="709px"
        />
      </div>
      <div className="order-1 mx-auto w-78.75 space-y-4 text-left md:mx-0 md:w-full md:max-w-133.75 md:pl-24 lg:order-2 lg:mx-0 lg:w-full lg:max-w-130 lg:pl-0">
        <p className="text-brand-500 text-sm font-bold md:text-lg">Point 1</p>
        <h2 className="text-[24px] leading-tight font-bold md:text-[32px] lg:text-[50px]">
          내가 등록한 사진으로
          <br className="lg:hidden" /> 더 기억에 남는 할 일 리스트
        </h2>
        <p className="text-sm text-zinc-400 md:text-lg">
          카드 내 추가한 이미지를 상단 썸네일로 노출하여
          <br className="lg:hidden" />
          작업에 대한 내용을 더 직관적으로 떠올릴 수 있어요
        </p>
      </div>
    </section>
  );
}
