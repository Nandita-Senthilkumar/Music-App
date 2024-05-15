import React from "react"
// import { news } from "../assets/data/data"
import { Card_lg } from "../common/Card_lg"
import { Title } from "../common/Title"
import { news } from "../asserts/data/data"

export const New = () => {
  return (
    <>
      <section className='treading hero px-2'>
        <Title title='Newly Released' />
        <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-1  gap-5'>
          {news.map((item, i) => (
            <div className='box card hero' key={i}>
              <Card_lg cover={item.cover} name={item.name} tag={item.tag} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}