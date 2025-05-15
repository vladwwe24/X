"use client"

// import s from "./Layout.module.scss"

// import "react-toastify/dist/ReactToastify.css"

import {ReactNode, useState} from "react"

import {usePathname} from "next/navigation"

// import {Bounce, ToastContainer} from "react-toastify"

// import {AuthProvider} from "contexts/AuthContext"

// import Footer from "components/widgets/Footer"
// import NavBar from "components/widgets/NavBar"

const Layout = ({children}: { children: ReactNode }) => {
    const pathname = usePathname()
    const [dark, setDark] = useState<boolean>(false)

    // className={dark ? "dark" : ""}

    if (pathname === "/") {
        return (
            <body>
            <div>
                {children}
                <button onClick={() => setDark(!dark)}>+</button>
            </div>
            </body>
        )
    }

    return (
        <body>
        {children}
        </body>
    )

    // return (
    //     <div></div>
    //     // <AuthProvider>
    //     //     <body className={s.body}>
    //     //         <NavBar/>
    //     //         {children}
    //     //         <Footer/>
    //     //         <div id="portal"/>
    //     //         <div id="alerts"/>
    //     //         <ToastContainer
    //     //             position="bottom-right"
    //     //             autoClose={5000}
    //     //             hideProgressBar
    //     //             newestOnTop={false}
    //     //             closeOnClick
    //     //             rtl={false}
    //     //             pauseOnFocusLoss
    //     //             draggable
    //     //             pauseOnHover
    //     //             theme="dark"
    //     //             limit={5}
    //     //             transition={Bounce}
    //     //         />
    //     //     </body>
    //     // </AuthProvider>
    // )
}

export default Layout