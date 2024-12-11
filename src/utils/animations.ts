import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const animatePageIn = () =>{
    const bannerOne = document.querySelector("#banner-1")
    const bannertwo = document.querySelector("#banner-2")
    const bannerthree = document.querySelector("#banner-3")
    const bannerfour = document.querySelector("#banner-4")

    if( bannerOne && bannertwo && bannerthree && bannerfour){
        const tl = gsap.timeline()

        tl.set([bannerOne, bannertwo, bannerthree, bannerfour], {
            yPercent:0,
        }).to([bannerOne, bannertwo, bannerthree, bannerfour], {
            yPercent:100,
            stagger:0.2,
        })
    }
}

export const animatePageOut = (href: string, router: AppRouterInstance)=>{
    const bannerOne = document.querySelector("#banner-1")
    const bannertwo = document.querySelector("#banner-2")
    const bannerthree = document.querySelector("#banner-3")
    const bannerfour = document.querySelector("#banner-4")

    if( bannerOne && bannertwo && bannerthree && bannerfour){
        const tl = gsap.timeline()

        tl.set([bannerOne, bannertwo, bannerthree, bannerfour], {
            yPercent:-100,
        }).to([bannerOne, bannertwo, bannerthree, bannerfour], {
            yPercent:0,
            stagger:0.2,
            onComplete:()=>{
                router.push(href)
            }
        })
    }
}