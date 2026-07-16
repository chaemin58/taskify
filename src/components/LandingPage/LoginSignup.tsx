import Image from "next/image";
import Link from "next/link";

import ImgSection1 from "@/assets/landing/img-section1.svg?url";

import { Button } from "../Button";

export function LoginSignup() {
  return (
    <section className="relative mx-auto flex w-full max-w-[1920px] flex-col items-center overflow-hidden md:flex-row md:items-center lg:h-[940px] lg:gap-[100px]">
      <div className="z-10 flex w-full flex-col justify-center px-6 py-10 md:mt-12.75 md:w-auto md:px-12 md:py-0 lg:mt-0 lg:h-full lg:pl-[clamp(40px,12vw,240px)]">
        <div className="text-center md:text-left">
          <div className="space-y-2 md:space-y-4">
            <p className="text-[24px] leading-tight font-bold md:text-5xl lg:text-[60px] lg:whitespace-nowrap">
              더 새로워진 일정 관리
            </p>
            <h1 className="text-brand-500 text-[30px] font-extrabold tracking-tight md:text-6xl lg:text-[90px]">
              TASKIFY
            </h1>
          </div>

          <div className="mt-10 grid w-full grid-cols-2 gap-3 md:flex md:flex-col md:items-start md:gap-4 lg:mt-12.5 lg:flex-row lg:gap-5">
            <Link href="/signup" className="w-full md:w-auto">
              <Button className="md:h-15 md:w-73.25 lg:w-50">
                회원가입하기
              </Button>
            </Link>
            <Link href="/login" className="w-full md:w-auto">
              <Button
                colorType="secondary"
                className="md:h-15 md:w-73.25 lg:w-50"
              >
                로그인하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative hidden w-full justify-end md:mt-[51px] md:flex md:flex-1 lg:mt-0">
        <div
          className="relative h-[400px] w-full overflow-hidden bg-[#17171C] shadow-2xl md:h-[500px] lg:h-[682px] lg:w-[1212px]"
          style={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
          }}
        >
          <Image
            src={ImgSection1}
            fill
            alt="section1 사진"
            className="object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}
