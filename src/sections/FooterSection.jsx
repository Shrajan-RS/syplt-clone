import { useMediaQuery } from "react-responsive";
import { socialLinks } from "../constants/index";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 760px)",
  });

  return (
    <section className="footer-section ">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src="images/video-img.webp"
            alt="drink-img"
            className="absolute top-0 object-contain mt-20"
          />
        ) : (
          <video
            src="videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          {socialLinks.map((link) => (
            <div className="social-btn" key={link.name}>
              <img src={link.src} alt={`${link.name}-link`} />
            </div>
          ))}
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>SPYLT Flavor</p>
            </div>

            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>

            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-lg capitalize">
            <p>
              get exclusive early access and stay informed about product
              updates, events and more!!!
            </p>

            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="images/arrow.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          <p>Copyright &copy; 2025 SPYLT - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms And Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
