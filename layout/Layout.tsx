import React from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface IProps {
    children: React.ReactNode
}

const Layout = (props: IProps) => {

    return (
        <>
            <div>
                <Header/>
                 {props.children}
                <Footer/>
            </div>
        </>
    )

}

export default Layout