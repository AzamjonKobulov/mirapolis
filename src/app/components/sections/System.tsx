import Image from "next/image";

export default function System() {
  return (
    <section>
      <div className="max-w-base mx-auto text-center px-3.5">
        <div className="relative inline-block rounded-full text-xs lg:text-sm leading-[14px] lg:leading-4 text-brand-dark-blue border border-white/80 overflow-hidden px-3.5 py-1.5 lg:px-4 lg:py-2">
          {/* Gradient background */}
          <span
            className="absolute inset-0 rounded-full z-[-2]"
            style={{
              background:
                "linear-gradient(302.62deg, #763EDB 0%, #0058E6 100%)",
            }}
          ></span>
          {/* White overlay */}
          <span className="absolute inset-0 rounded-full bg-white opacity-70 z-[-1]"></span>
          Исследование 2024
        </div>
        {/* Texts */}
        <div className="max-w-[700px] mx-auto space-y-3 mt-6">
          <h3 className="text-white text-[32px]/8 lg:text-[40px]/[40px]">
            Самая функциональная LMS-система на российском рынке
          </h3>
          <p className="text-white/80 text-sm lg:text-xl leading-4 lg:leading-6">
            По результатам исследования рынка LMS-решений в России в 2024 году,
            проведенного консалтинговой компанией “Технологии доверия” (ex.
            <a href="#" className="underline lg:no-underline">
              PricewaterhouseCoopers Russia
            </a>{" "}
            ).
          </p>
          <Image
            src="/assets/images/pwc.svg"
            alt="pwc"
            width={63}
            height={48}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
