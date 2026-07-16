import Image from "next/image";

import imgSection4_mobile_1 from "@/assets/landing/img-section4-dashboard-mobie.svg?url";
import imgSection4_tablet_1 from "@/assets/landing/img-section4-dashboard-tablet.svg?url";
import imgSection4_mobile_2 from "@/assets/landing/img-section4-invite-mobile.svg?url";
import imgSection4_tablet_2 from "@/assets/landing/img-section4-invite-tablet.svg?url";
import imgSection4_2 from "@/assets/landing/img-section4-invite.svg?url";
import imgSection4_mobile_3 from "@/assets/landing/img-section4-member-mobile.svg?url";
import imgSection4_tablet_3 from "@/assets/landing/img-section4-member-tablet.svg?url";
import imgSection4_3 from "@/assets/landing/img-section4-member.svg?url";
import imgSection4_1 from "@/assets/landing/imgSection4_1.png";

const section3Cards = [
  {
    pc: imgSection4_1,
    tablet: imgSection4_tablet_1,
    mobile: imgSection4_mobile_1,
    title: "대시보드 설정",
    desc: "대시보드 사진과 이름을 변경할 수 있습니다.",
  },
  {
    pc: imgSection4_2,
    tablet: imgSection4_tablet_2,
    mobile: imgSection4_mobile_2,
    title: "초대",
    desc: "새로운 팀원을 초대할 수 있습니다.",
  },
  {
    pc: imgSection4_3,
    tablet: imgSection4_tablet_3,
    mobile: imgSection4_mobile_3,
    title: "구성원",
    desc: "구성원을 초대하고 내보낼 수 있습니다.",
  },
];

export function Point3() {
  return (
    <section className="relative w-full py-12 md:py-24">
      <div className="mx-auto w-full max-w-[1920px] lg:pr-[240px] lg:pl-[clamp(40px,12vw,240px)]">
        <div className="mx-auto w-[320px] text-left md:mx-0 md:w-full md:max-w-[502px] md:pl-24 lg:mx-0 lg:max-w-[700px] lg:py-6 lg:pl-0">
          <p className="text-brand-500 mb-2 text-base font-bold lg:text-lg">
            Point 3
          </p>
          <h2 className="text-[24px] leading-tight font-bold md:text-[32px] lg:text-[50px]">
            나에게 맞게, 더 효율적으로
            <br />
            생산성을 높이는 다양한 설정
          </h2>
          <p className="mt-4 text-base text-zinc-400 lg:text-lg">
            작업 방식에 맞게 색상, 팀원, 구성원 등을
            <br className="md:hidden" /> 쉽게 관리할 수 있어요.
            <br />
            환경을 조율하면 일은 더 가볍고 빠르게 흘러갑니다.
          </p>
        </div>

        <div className="mt-8 flex w-full flex-col gap-0 px-6 md:mt-10 md:gap-[30px] md:px-24 lg:mt-0 lg:flex-row lg:gap-[30px] lg:px-0">
          {section3Cards.map((item, idx) => {
            const isLastItem = idx === section3Cards.length - 1;

            return (
              <div
                key={idx}
                className="flex flex-col items-start lg:max-w-[462px] lg:flex-1"
              >
                <div
                  className={`relative mx-auto mt-[10px] w-full max-w-[315px] overflow-hidden md:mx-0 md:mt-0 md:aspect-[462/251] md:max-w-none lg:max-h-[251px] lg:max-w-[462px] ${
                    isLastItem ? "h-[144px] md:h-auto" : "aspect-[315/195]"
                  }`}
                >
                  <Image
                    src={item.mobile}
                    alt={item.title}
                    fill
                    className="object-fill md:hidden"
                    sizes="315px"
                  />
                  <Image
                    src={item.tablet}
                    alt={item.title}
                    fill
                    className="hidden object-fill md:block lg:hidden"
                    sizes="100vw"
                  />
                  <Image
                    src={item.pc}
                    alt={item.title}
                    fill
                    className="hidden object-fill lg:block"
                    sizes="462px"
                  />
                </div>

                <div className="mx-auto mt-[20px] flex w-full max-w-[315px] flex-col items-start gap-2 pb-[40px] md:mx-0 md:mt-[0px] md:max-w-none md:pb-0 lg:mx-0 lg:mt-[28px] lg:ml-[30px]">
                  <h3 className="text-left text-xl font-bold lg:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="text-left text-sm text-zinc-400 lg:text-[16px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
