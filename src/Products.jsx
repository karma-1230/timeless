import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

const products = [
    { id: 1, name: "Product 1", image: "/images/hoodie-1.jpg" },
    { id: 2, name: "Product 2", image: "/images/hoodie-2.jpg" },
    { id: 3, name: "Product 3", image: "/images/hoodie-3.jpg" },
    { id: 4, name: "Product 4", image: "/images/hoodie-4.jpg" },
]

function Products() {
    const swiperRef = useRef(null)

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4" style={{ fontSize: "70px", color: 'white' }}>Our Products</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
            >
                {products.map((product, index) => (
                    <SwiperSlide
                        key={product.id}
                        style={{ width: "300px" }}
                        onClick={() => swiperRef.current?.slideTo(index)}
                    >
                        <div className="card shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="card-img-top"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.name}</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Products
