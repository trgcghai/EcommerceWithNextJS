'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { OutlinedButton } from '../Buttons'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
    const [hovered, setHovered] = useState({
        favorite: false,
        cart: false,
        user: false,
        search: false,
    })
    return (
        <>
            <div className="fixed top-0 right-0 left-0 z-20 bg-main">
                <div className="container px-0 mx-auto flex items-center justify-between py-2">
                    <div className="font-bold text-main p-1 rounded-lg bg-white text-lg md:text-2xl lg:text-3xl">
                        <Link href={'/'} className="flex items-center gap-2">
                            <Image src={'/icon_256.png'} alt="" width={30} height={30} />
                            TCHStores
                        </Link>
                    </div>
                    <div className="flex w-full max-w-lg items-center space-x-2 relative">
                        <div className="absolute right-2">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 cursor-pointer" />
                        </div>
                        <Input type="text" placeholder="What do you want to find..." className="focus-visible:border-0 focus-visible:outline-none" />
                    </div>
                    <div className="flex items-center gap-2">
                        <div onMouseEnter={() => setHovered({ ...hovered, favorite: true })} onMouseLeave={() => setHovered({ ...hovered, favorite: false })}>
                            <OutlinedButton>
                                <FontAwesomeIcon icon={faHeart} className={`${hovered.favorite ? 'text-main' : 'text-white'}`} height={25} />
                                <span className={`${hovered.favorite ? 'text-main' : 'text-white'}`}>Yêu thích</span>
                            </OutlinedButton>
                        </div>
                        <div onMouseEnter={() => setHovered({ ...hovered, cart: true })} onMouseLeave={() => setHovered({ ...hovered, cart: false })}>
                            <OutlinedButton>
                                <FontAwesomeIcon icon={faCartShopping} className={`${hovered.cart ? 'text-main' : 'text-white'}`} height={25} />
                                <div className={`${hovered.cart ? 'text-main' : 'text-white'}`}>
                                    <div className="text-md">Giỏ hàng</div>
                                    <div className="text-sm">0.000 đ</div>
                                </div>
                            </OutlinedButton>
                        </div>
                        <div onMouseEnter={() => setHovered({ ...hovered, user: true })} onMouseLeave={() => setHovered({ ...hovered, user: false })}>
                            <OutlinedButton>
                                <FontAwesomeIcon icon={faUser} className={`${hovered.user ? 'text-main' : 'text-white'}`} height={25} />
                                <span className={`${hovered.user ? 'text-main' : 'text-white'}`}>Đăng nhập / Đăng ký</span>
                            </OutlinedButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}