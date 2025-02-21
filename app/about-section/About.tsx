import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I craft stunning films, create compelling visuals, and bring stories to life."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I specialize in crafting visually stunning films and compelling video content that captivates audiences. From storytelling to editing, I bring ideas to life on screen."
              }
            />
            <AnimatedBody
              text={
                "Whether I’m directing a cinematic sequence or fine-tuning an edit, my goal is to create immersive, emotionally engaging experiences that leave a lasting impact."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "Beyond filmmaking, I stay involved in creative communities, collaborating with brands, artists, and content creators to push the boundaries of visual storytelling."
              }
            />
            <AnimatedBody
              text={
                "When I'm not behind the camera or in the editing suite, you’ll find me exploring new filmmaking techniques, analyzing classic cinema, or curating my next visual masterpiece."
              }
            />
            <AnimatedBody
              text={
                "I'm currently working on exciting projects, but I'm always open to new collaborations and creative challenges. Let's bring your vision to life!"
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Edititng Software"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, Adobe After Effects, Avid Media Composer, CapCut."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Motion Graphics & VFX"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Adobe After Effects, Blender, Cinema 4D, Houdini, Mocha Pro, Trapcode Suite."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Color Grading & Audio"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "DaVinci Resolve, Adobe Audition, Izotope RX, Logic Pro X, Pro Tools, Dolby Atmos, ReelSmart Motion Blur."
                }
              />
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default About;
