import Image from "next/image";
import Header from "@/components/header";
import Jumbotron from "@/components/jumbotron";
import { DialogProvider } from "@/components/dialog-provider";
import dynamic from "next/dynamic";
import PhotoGallery from "@/components/photo-gallery";
import Footer from "@/components/Footer";

const DynamicFelicitationForm = dynamic(() => import("./felicitation-form"), {
  ssr: false,
});

export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <DialogProvider>
          <Jumbotron />
          <section
            id="event-details"
            className="w-full pt-12 md:pt-24 lg:py-32 bg-muted"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-caudex font-bold tracking-tighter sm:text-5xl">
                    Event Details
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join us for a series of events celebrating the 70th birthday
                    of Dr. Cosmas Ilechukwu.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 pt-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="grid gap-6">
                    <div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-caudex font-bold">
                          LEADERSHIP LECTURE
                        </h3>
                        <p className="text-muted-foreground">
                          &apos;COSMAS ILECHUKWU LEADERSHIP LECTURE&apos; on
                          Friday, November 8th, 2024 by 10am at Amaechi Hall,
                          Rockview Hotel, by Government House Roundabout, Owerri
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-caudex font-bold">
                          THANKSGIVING SERVICE
                        </h3>
                        <p className="text-muted-foreground">
                          on Saturday, November 9th, 2024 by 10am at CRM Holy
                          Ghost Tabernacle, behind Chisco Park, off Egbu Road,
                          Owerri, Imo State
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-caudex font-bold">
                          RECEPTION
                        </h3>
                        <p className="text-muted-foreground">
                          at Swiss International Beland Hotel, General Hospital
                          Road, Off Port Harcourt Road, Owerri
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src="/images/landscape.webp"
                  alt="Event Details"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  width="550"
                  height="310"
                  priority
                />
              </div>
            </div>
          </section>
          <DynamicFelicitationForm />
          <PhotoGallery />
        </DialogProvider>
      </main>
      <Footer />
    </div>
  );
}
