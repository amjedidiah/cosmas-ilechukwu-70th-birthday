import Image from "next/image";
import FelicitationFormButton from "./felicitation-form-button";

export default function Jumbotron() {
  return (
    <section className="w-full pt-16 md:pt-24 lg:pt-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-caudex font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Celebrating 70 Years of Impactful Leadership
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join us in honoring Dr. Cosmas Ilechukwu, the General Overseer
                of the Charismatic Renewal Ministries, on his 70th birthday.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <FelicitationFormButton />
            </div>
          </div>
          <Image
            src="/images/portrait.webp"
            alt="Dr. Cosmas Ilechukwu"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last max-lg:max-w-[360px]"
            width="550"
            height="550"
            priority
          />
        </div>
      </div>
    </section>
  );
}
