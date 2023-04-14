import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import {Inter} from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Layout from "@/layout/Layout";

const inter = Inter({subsets: ['latin']})
import Link from 'next/link'

export default function Home() {


    let length = 24;

    let render_items: React.ReactElement[] = [];

    for (let i = 0; i < length; i++) {
        render_items.push(
            <div className=" w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4" key={i}>
                <div className="item flex">
                    <article className="w-full flex-col text-left">
                        {/*<div className='bg-white rounded-lg shadow-md p-6'>*/}
                                <div className="image_container flex justify-center">
                                    <img className="thumbnail rounded-3xl w-full h-56"
                                         src="https://res.cloudinary.com/spacejelly-tutorials/video/upload/q_auto/f_auto:image/v1/my-videos/soccer?_a=AJE+xWI0"
                                         alt=""/>
                                </div>
                                <Link href="/stream">
                                    <p className="content_text">
                                        [標題]: xxxxxxx
                                    </p>
                                </Link>
                        {/*</div>*/}
                    </article>
                </div>
            </div>
        )
    }

    return (
        <>
            <Layout>
                <div className="m-5 h-full flex  flex-col md:flex-row">
                    {/*<div className="text-center w-full md:w-1/6 md:h-auto  bg-gray-200">*/}
                        {/*<ul className="p-12">*/}
                        {/*    <li className="mb-3">熱門</li>*/}
                        {/*    <li className="mb-3">FC2</li>*/}
                        {/*    <li className="mb-3">520.CC</li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                    <div className="justify-center md:w-full bg-white">
                        <div className="flex flex-wrap min-h-full">
                            {render_items}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
