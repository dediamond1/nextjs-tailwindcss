import { GrTime } from 'react-icons/gr'
import { BiTrendingUp, BiUserCircle, BiHome } from 'react-icons/bi'
import { MdAddShoppingCart, MdShoppingBag } from 'react-icons/md'
import { BsPeopleFill, BsCurrencyDollar, BsBarChart } from 'react-icons/bs'

export const navData = {
    menuItems: [
        {
            items: [
                { seconTitle: "Dashboard", },
                {
                    title: "home",
                    icon: <BiHome className='h-7 w-7 text-2xl ' />,
                    link: "/"
                },
                {
                    title: "Analytics",
                    icon: <GrTime className='h-6 w-6 text-2xl' />,
                    link: "/"
                },

                {
                    title: "Sales",
                    icon: < BiTrendingUp className='h-6 w-6 text-2xl' />,
                    link: "/"
                },
            ]
        },
        {
            items: [
                { seconTitle: "Quick Menu", },
                {
                    title: "Register",
                    icon: < BsPeopleFill className='h-6 w-6 text-2xl' />,
                    link: "/"
                },
                {
                    title: "Transactions",
                    icon: < BsCurrencyDollar className='h-6 w-6  text-2xl' />,
                    link: "/"
                },

                {
                    title: "Orders",
                    icon: < BsBarChart className='h-6 w-6 text-2xl' />,
                    link: "/"
                },
            ]
        },
        {
            items: [
                { seconTitle: "Products", },
                {
                    title: "All products",
                    icon: < MdShoppingBag className='h-6 w-6 text-2xl' />,
                    link: "/"
                },
                {
                    title: "create product",
                    icon: < MdAddShoppingCart className='h-6 w-6 text-2xl' />,
                    link: "/"
                },


            ]
        },
        {
            items: [
                { seconTitle: "Mananger", },
                {
                    title: "All Managers",
                    icon: <BsPeopleFill className='h-6 w-6 text-2xl' />,
                    link: "/create-manager"
                },



            ]
        },
        {
            items: [
                { seconTitle: "Employees", },
                {
                    title: "All employees",
                    icon: <BsPeopleFill className='h-6 w-6 text-2xl' />,
                    link: "/"
                },
            ]
        },
    ],





}