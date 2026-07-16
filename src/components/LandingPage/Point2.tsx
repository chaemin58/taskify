import Image from "next/image";

import ImgSection3_mobile from "@/assets/landing/img-section3-mobile.svg?url";
import imgSection3_tablet from "@/assets/landing/img-section3-tablet.svg?url";
import imgSection3 from "@/assets/landing/img-section3.svg?url";

export function Point2() {
  return (
    <section className="mx-auto flex w-full max-w-480 flex-col items-start overflow-hidden lg:flex-row lg:items-center lg:py-24">
      <div className="z-10 order-1 mx-auto flex w-78.75 flex-col justify-center py-12 text-left md:mx-0 md:w-full md:max-w-132.5 md:py-16 md:pl-24 lg:mx-0 lg:max-w-175 lg:py-0 lg:pl-[clamp(40px,12vw,240px)]">
        <p className="text-brand-500 text-sm font-bold md:text-lg">Point 2</p>
        <h2 className="mt-4 text-[24px] leading-tight font-bold md:text-[32px] lg:text-[45px]">
          자세한 정보는 명확하게,
          <br />팀 논의는 빠르게 확인하세요
        </h2>
        <p className="mt-4 text-sm text-zinc-400 md:text-lg">
          작업에 필요한 세부 내용을 손쉽게 정리하고,
          <br />
          댓글을 통해 팀원들과 빠르게 소통해보세요
        </p>
      </div>

      <div className="relative order-2 flex w-full justify-center px-6 pt-10 md:pt-16 lg:ml-37.5 lg:flex-1 lg:justify-start lg:px-0 lg:pt-0 lg:pr-25">
        <div className="relative aspect-315/640 w-full max-w-78.75 overflow-hidden md:aspect-709/714 md:max-w-177.25">
          <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-linear-to-t from-[#161519] to-transparent lg:hidden" />
          <Image
            src={ImgSection3_mobile}
            fill
            sizes="709px"
            alt="point2 설명 이미지"
            className="object-contain object-center lg:hidden"
          />
          <Image
            src={imgSection3_tablet}
            alt="point2 설명 이미지"
            fill
            className="hidden object-contain object-center md:block lg:hidden"
            sizes="709px"
          />
          <Image
            src={imgSection3}
            alt="상세 정보"
            fill
            className="hidden object-contain object-left-bottom lg:block"
            sizes="60vw"
          />
        </div>
      </div>
    </section>
  );
}
