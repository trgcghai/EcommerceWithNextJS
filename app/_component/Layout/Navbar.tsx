'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ListCategories from "./ListCategories"

export default function Navbar() {
    const pathName = usePathname()
    return (
        <NavigationMenu className="w-full block max-w-full">
            <NavigationMenuList className="bg-white rounded-md p-1 justify-between">
                <NavigationMenuList>
                    <NavigationMenuItem className="">
                        <Popover>
                            <PopoverTrigger className="p-2 pr-24">Danh mục sản phẩm</PopoverTrigger>
                            <span className="ml-3 mr-2">|</span>
                            <PopoverContent sideOffset={22} align="start" alignOffset={-4} className="p-2" style={{ width: '267px', height: '632px' }}>
                                <ListCategories></ListCategories>
                            </PopoverContent>
                        </Popover>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-center">
                        <Breadcrumb className="">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuItem className="p-3 flex items-center gap-2">
                        <Link href={'/'} className={`text-sm font-semibold  ${pathName == '/' ? 'text-main' : 'text-white'}`}>Giảm giá đặc biệt cho đơn hàng đầu tiên !!</Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenuList>
        </NavigationMenu>

    )
}