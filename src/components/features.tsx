import { PropsWithChildren, useRef, useState } from "react";
//import { TiLocationArrow } from "react-icons/ti";

interface BentoTiltProps {
  className?: string;
}

const BentoTilt = ({
  children,
  className = "",
}: PropsWithChildren<BentoTiltProps>) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description?: string;
}

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <article className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="tetx-xl mt-3 max-w-64 md:text-base text-wrap">{description}</p>
          )}
        </div>
      </div>
    </article>
  );
};

export const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            About Gandharva
          </p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Gandharva is a National level Techno-Cultural Fest organised by the students of Vishwakarma Institute of Information Technology (VIIT), Pune Starting from 2008, GANDHARVA has been a stalwart throughout the years to the students of VIIT.

Not only consisting of spectacular cultural events, but also thought provoking technical ones. An avenue for the students to express themselves to their highest level. Through fashion shows, singing and dancing events, to crowds of upto 7000+ people.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-110000000000 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/recap3.mp4"
            title={
              <>
                re<b>c</b>ap
              </>
            }
            description="Music , Dance and love ."
          />
        </BentoTilt>

        <div
          id="nexus"
          className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7"
        >
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/flash.mp4"
              title={
                <>
                  {/* comm<b>i</b>tee 2025 */}
                </>
              }
              // description="An anime and gaming-inspired NFT"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/pl.mp4"
              title={
                <>
                
                </>
              }
            //  description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  he<b>l</b>p
                </>
              }
              
              description="Contact 7517848611"

            />
         
          
          </BentoTilt>


          <BentoTilt className="bento-tilt_1 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-5.mp4"
              title={
                <>
                  get r<b>e</b>ady
                </>
              }
              // description="An anime and gaming-inspired NFT"
            />
          </BentoTilt>

          {/* <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing so<b>o</b>n!
                
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt> */}

          {/* <BentoTilt className="bento-tilt_2">
            <video
              src="/videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />


              <BentoCard
              src="/videos/feature-5.mp4"
              title={
                <>
                  get
                </>
              }
               description="An anime and gaming-inspired NFT"
            />
            */}
            
          {/* </BentoTilt> */}



          
        </div>
      </div>
    </section>
  );
};
