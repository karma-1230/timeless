import { useEffect, useRef } from "react"
import { gsap } from "gsap"

function HeroSection() {
    const leftRef = useRef(null)
    const rightRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ delay: 1 })
        tl.to(leftRef.current, {
            x: "-40%",
            duration: 1.2,
            ease: "power3.inOut",
        })
            .to(
                rightRef.current,
                {
                    x: "40%",
                    duration: 1.2,
                    ease: "power3.inOut",
                },
                "<"
            )
            .fromTo(
                contentRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 2, ease: "power3.out" },
                "-=0.5"
            )
    }, [])

    return (
        <div className="position-relative vh-100 w-100 overflow-hidden bg-black d-flex align-items-center justify-content-center">
            {/* Curtains */}
            <div
                ref={leftRef}
                className="position-absolute top-0 start-0 w-50 h-100 z-2"
                style={{ backgroundColor: "black" }}
            >
                <img
                    src="/images/left.jpg"
                    alt="Left Curtain"
                    className="w-100 h-100 object-fit-cover"
                />
            </div>
            <div
                ref={rightRef}
                className="position-absolute top-0 end-0 w-50 h-100 z-2"

            >
                <img
                    src="/images/right.jpg"
                    alt="Right Curtain"
                    className="w-100 h-100 object-fit-cover"
                />
            </div>

            {/* Content */}
            <div
                ref={contentRef}
                className="position-relative text-center text-white px-3 z-1"
            >
                <h1 className="display-3 fw-bold mb-4">Timeless</h1>
                <button className="btn btn-outline-light px-5 py-3 position-relative overflow-hidden">
                    <span className="position-relative z-1">Shop Now</span>
                </button>
            </div>
        </div >
    )
}

export default HeroSection
