import React from "react";
import Link from 'next/link'

const Header = ()=>{
    return (
        <div className="flex header bg-black">
            <div className="p-5 flex-1 h-20 text-left text-3xl text-white">
                <Link href="/">
                <h3 >TkTubes</h3>
                </Link>
            </div>
        </div>
    )
}

export default Header;