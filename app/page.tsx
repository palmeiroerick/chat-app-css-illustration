import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-top absolute h-[60vh] w-[375px] -translate-x-1/2 rounded-b-full" />
      <main className="relative z-10 flex flex-col items-center justify-center gap-14 py-14">
        <section className="w-64 overflow-hidden rounded-3xl border-8 border-white bg-lightGrayishViolet shadow-2xl">
          <div className="bg-gradient-right rounded-b-md">
            <div className="m-auto h-5 w-32 rounded-b-2xl bg-white" />
            <div className="flex flex-row items-center justify-between p-3">
              <div className="flex flex-row items-center gap-2">
                <Image src="/arrow.svg" alt="arrow" width={10} height={16} />
                <Image
                  className="h-6 w-6 rounded-full border bg-white"
                  src="/avatar.jpg"
                  alt="samuel green photo"
                  width={24}
                  height={24}
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-[13px] font-bold leading-none text-white">
                    Samuel Green
                  </h2>
                  <h3 className="text-[10px] leading-none text-paleViolet">
                    Available to Walk
                  </h3>
                </div>
              </div>
              <Image
                src="/ellipsis.svg"
                alt="ellipsis"
                width={10}
                height={10}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2 text-[9px]">
            <div className="w-36 rounded-xl rounded-bl-sm bg-paleViolet bg-opacity-20 p-2 text-moderateViolet">
              That sounds great. I’d be happy with that.
            </div>
            <div className="w-36 rounded-xl rounded-bl-sm bg-paleViolet bg-opacity-20 p-2 text-moderateViolet">
              Could you send over some pictures of your dog, please?
            </div>
            <div className="my-2 flex flex-col items-end gap-2 self-end">
              <div className="flex gap-2">
                <Image
                  className="rounded-xl"
                  src="/dog-image-1.jpg"
                  alt="dog image"
                  width={42}
                  height={42}
                />
                <Image
                  className="rounded-xl"
                  src="/dog-image-2.jpg"
                  alt="dog image"
                  width={42}
                  height={42}
                />
                <Image
                  className="rounded-xl"
                  src="/dog-image-3.jpg"
                  alt="dog image"
                  width={42}
                  height={42}
                />
              </div>
              <div className="w-36 rounded-xl rounded-br-sm bg-white p-2 text-veryDarkDesaturatedViolet shadow-[1px_2px_10px_1px_#d4d4d4]">
                Here are a few pictures. She’s a happy girl!
              </div>
              <div className="w-24 rounded-xl rounded-br-sm bg-white p-2 text-veryDarkDesaturatedViolet shadow-[1px_2px_10px_1px_#d4d4d4]">
                Can you make it?
              </div>
            </div>
            <div className="w-36 rounded-xl rounded-bl-sm bg-paleViolet bg-opacity-20 p-2 text-moderateViolet">
              She looks so happy! The time we discussed works. How long shall I
              take her out for?
            </div>
            <div className="bg-gradient-left flex w-44 items-center justify-between rounded-lg rounded-bl-sm bg-opacity-20 p-2 pr-4 text-white">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full border border-paleViolet" />
                <span>30 minute walk</span>
              </div>
              <span className="text-sm font-bold">$29</span>
            </div>
            <div className="bg-gradient-left flex w-44 items-center justify-between rounded-lg rounded-bl-sm bg-opacity-20 p-2 pr-4 text-white">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full border border-paleViolet" />
                <span>1 hour walk</span>
              </div>
              <span className="text-sm font-bold">$49</span>
            </div>
            <div className="flex flex-col">
              <input
                className="mt-2 w-full rounded-full p-3 pl-6"
                type="text"
                placeholder="Type a message…"
              />
              <div className="relative bottom-[2.0625rem] mb-[-28px] mr-[6px] flex h-7 w-7 rotate-180 items-center justify-center self-end rounded-full bg-veryDarkDesaturatedViolet">
                <Image src="/arrow.svg" alt="arrow" width={10} height={16} />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-3 px-8">
          <h1 className="text-center text-[40px] font-medium">
            Simple booking
          </h1>
          <p className="text-center leading-7 text-darkGrayishViolet">
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </section>
      </main>
      <div className="bg- absolute bottom-0 right-0 h-[60vh] w-[375px] translate-x-1/2 rounded-t-full bg-paleViolet bg-opacity-[0.075]" />
    </div>
  );
}
