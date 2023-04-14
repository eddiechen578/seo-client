import Layout from "@/layout/Layout";
const index = ()=>{


    return (
        <>
            <Layout>
                <div className="m-2 flex h-full flex-col justify-center">
                    <div className="h-1/6 p-5 text-center bg-gray-200">
                        <h3>標題標題標題標題標題標題標題標題標題標題標題標題標題</h3>
                    </div>

                    <div className="rwd-media h-5/6 w-auto bg-gray-100">
                        <div className="flex flex-col justify-center">
                           <div className="flex p-8 justify-center">
                               <iframe
                                   src="https://www.youtube-nocookie.com/embed/LhkmfO6jhh4"
                                   width="1300" height="400" frameBorder="0"
                                   allowFullScreen></iframe>
                           </div>
                            <div className="flex p-8 justify-center">
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/LhkmfO6jhh4"
                                    width="1300" height="400" frameBorder="0"
                                    allowFullScreen></iframe>
                            </div>

                            <div className="flex p-8 justify-center">
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/LhkmfO6jhh4"
                                    width="1300" height="400" frameBorder="0"
                                    allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )

}

export default index;