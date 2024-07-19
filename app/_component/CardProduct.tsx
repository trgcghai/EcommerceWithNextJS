import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useState } from "react"

const CardProduct = (): React.ReactNode => {
    const [showFavorite, setShowFavorite] = useState(false)
    const [favorite, setFavorite] = useState(false)

    return (
        <Card
            className="overflow-hidden"
            onMouseEnter={() => setShowFavorite(true)}
            onMouseLeave={() => setShowFavorite(false)}
        >
            <CardHeader className="p-0 relative">
                <Image src={'/demo2.png'} alt=""
                    height={200}
                    width={200}
                    className="w-full aspect-square rounded-md rounded-b-none hover:scale-105"
                    style={{
                        transition: 'transform .2s ease-in-out'
                    }}
                />
                <CardTitle className="px-3 py-2">Tên sản phẩm</CardTitle>
                {showFavorite && <div className="absolute top-0 right-2">
                    <Button
                        className="bg-white hover:bg-white w-10 h-10 p-0 text-xl aspect-square rounded-full"
                        onClick={() => setFavorite(!favorite)}
                    >
                        <Image src={favorite ? '/liked.png' : '/non_like.png'} alt=""
                            height={25}
                            width={25}
                        />
                    </Button>
                </div>}
            </CardHeader>
            <CardContent className="px-3 py-1 flex items-center gap-2">
                <span className="line-through text-sm inline-block">400.000 VNĐ</span>
                <span className="text-lg">200.000 VNĐ</span>
            </CardContent>
            <CardFooter className="p-3">
                <Button className="bg-main hover:bg-main-dark w-full text-md">
                    <FontAwesomeIcon icon={faCartPlus} height={25} className="text-white mr-2" />
                    Thêm vào giỏ hàng
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CardProduct