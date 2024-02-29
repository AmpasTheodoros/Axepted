"use clinet";

import Link from "next/link";
import Image from "next/image";
import { Kdam_Thmor_Pro, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Sword,  Dices, Shield, FileText, Settings} from "lucide-react";

const kdamThmorPro = Kdam_Thmor_Pro ({
    weight: "400",
    subsets: ["latin"]
});

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "League of Legends",
        icon: Sword,
        href: "/league-of-legends",
        color: "text-blue-800",
    },
    {
        label: "Hearthstone",
        icon: Dices,
        href: "/hearthstone",
        color: "text-orange-500",
    },
    {
        label: "Legends of Runeterra",
        icon: Shield,
        href: "/legends-of-runeterra",
        color: "text-green-600",
    },
    {
        label: "Blogs",
        icon: FileText,
        href: "/blogs",
        color: "text-violet-500",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/dashboard",
    },
];

const Sidebar = () => {
    return ( 
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl- mb-14">
                    <div className="relative w-20 h-20 mr-4">
                        <Image fill alt='Logo' src="/logo.png"/>
                    </div>
                    <h1 className={cn("text-2xl font-bold", kdamThmorPro.className)}>
                        Axepted
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
                        >
                            <div className="flex item-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;