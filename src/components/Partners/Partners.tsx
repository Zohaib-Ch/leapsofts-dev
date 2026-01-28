import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './Partners.module.css';

const Partners = () => {
  const logoFiles = [
    'Afirme.png',
    'Dewford.png',
    'digicars.png',
    'techadvancer.svg',
    'aa-logo.svg',
    'hpe.svg',
    'truper.svg',
    'joget.svg',
    'osorio.png',
    'cmolds.png',
    'ipmd-logo.png',
    'harris-paints.png',
    'JBreeden.png',
    'knife.jpg',
  ];

  return (
    <>
    <h2 className={styles["title"]}>Our Partners</h2>
    <section className={styles["container"]}>
      <div className={styles["partner-list"]}>
        
        <div className={styles["slider"]}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 70,
              },
            }}
            className={styles["swiper"]}
          >
            {logoFiles.map((partner, index) => (
              <SwiperSlide key={`${partner}-${index}`} className={styles["slide"]}>
                <div className={styles["logo"]}>
                  <img
                    src={"/partner-logos/" + partner}
                    alt={partner.split('.')[0]}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    </>
  );
};

export default Partners;