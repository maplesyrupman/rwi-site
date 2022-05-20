import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from '../styles/ServicesSlider.module.css';

// import required modules
import { Pagination } from "swiper";

export default function ServicesSlider({ services }) {

    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
            >
                {services.map((service, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <div className={styles.serviceCon}>
                                <div className={styles.icon}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.title}>{service.title}</h3>
                                <p className={styles.para}>{service.para}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}