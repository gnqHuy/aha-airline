import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import { useFlightContext } from '../../context/FlightContext/FlightContext'

type Props = {
}

const NewsPage = (props: Props) => {
    const { newsList, index, count } = useFlightContext();
    useEffect(() => {
    }, []);
  return (
    <Layout>
        <div>
            {newsList.map((news, idx) => {
                if (idx === index) {
                    return <div>
                        <h1 className="text-4xl font-semibold text-golden mb-6 ml-[13rem] mt-[0.5rem] relative top-[2.5rem]">{news?.header}</h1>
                        <div className = "mt-[5rem] ml-[13rem]" dangerouslySetInnerHTML={{__html: news?.content}}/>
                    </div>
                }
            })}
        </div>
    </Layout>
  )
}

export default NewsPage