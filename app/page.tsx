'use client'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

import ListCategories from "./_component/Layout/ListCategories";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountdownTimer from "./_component/Countdown";
import { addDays } from 'date-fns'
import CardProduct from "./_component/CardProduct";

export default function Home() {
	const [showButton, setShowButton] = useState(false)

	return (
		<div className="mt-4">
			<div className="grid grid-cols-5 gap-4" style={{ gridTemplateRows: 'repeat(3, 200px)' }}>
				<div className="col-span-1 row-span-3 bg-white rounded-lg p-2" >
					<ListCategories />
				</div>
				<div className="col-span-3 row-span-2" style={{ flexGrow: 8 }}>
					<Carousel className="w-full h-full">
						<CarouselContent
							onMouseEnter={() => setShowButton(true)}
							onMouseLeave={() => setShowButton(false)}
						>
							<CarouselItem className="cursor-pointer" style={{ height: '416px' }}>
								<Image src='/demo2.png' alt="" height={2000} width={2000} className="rounded-lg w-full h-full" />
							</CarouselItem>
							<CarouselItem className="cursor-pointer" style={{ height: '416px' }}>
								<Image src='/demo2.png' alt="" height={2000} width={2000} className="rounded-lg w-full h-full" />
							</CarouselItem>
							<CarouselItem className="cursor-pointer" style={{ height: '416px' }}>
								<Image src='/demo2.png' alt="" height={2000} width={2000} className="rounded-lg w-full h-full" />
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious
							className={`${showButton ? 'flex' : 'hidden'} left-0 border-0 bg-transparent rounded-none h-full text-white hover:bg-transparent hover:text-white`}
						/>
						<CarouselNext
							className={`${showButton ? 'flex' : 'hidden'} right-0 border-0 bg-transparent rounded-none h-full text-white hover:bg-transparent hover:text-white`}
						/>
					</Carousel>
				</div>
				<div className="col-span-1 row-span-3 grid grid-cols-1 gap-4" style={{ flexGrow: 3 }}>
					<div className="w-full">
						<Image src='/demo2.png' alt="" width={1000} height={1000} className="rounded-lg w-full h-full" />
					</div>
					<div className="w-full">
						<Image src='/demo2.png' alt="" width={1000} height={1000} className="rounded-lg w-full h-full" />
					</div>
					<div className="w-full">
						<Image src='/demo2.png' alt="" width={1000} height={1000} className="rounded-lg w-full h-full" />
					</div>
				</div>
				<div className="col-span-3 row-span-1">
					<Image src='/demo3.png' alt="" width={1000} height={1000} className="rounded-lg w-full h-full" />
				</div>
			</div>
			<div className="mt-4 p-3 rounded-lg bg-white">
				<div className="flex items-center justify-between">
					<span className="text-2xl text-main font-bold">
						Khuyến mãi đặc biệt
					</span>
					<CountdownTimer targetDate={addDays(new Date(), 2).getTime()} />
				</div>
				<div className="grid grid-cols-5 gap-4 mt-3">
					{[0, 1, 2, 3, 4].map((item, index) => {
						return (
							<CardProduct key={item} />
						)
					})}
				</div>
			</div>
		</div>
	);
}
