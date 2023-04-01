// 'use client'
import Image from "next/image";
import next from "next/types";

async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=cards`, { cache: 'no-store', next: { revalidate: 60 } });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();
  console.log(blogs.includes.Asset[0].fields.file.url);
  console.log(blogs);

  return (

    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-5 p-5 bg-slate-600">
      {blogs.items.map((item: any) => (
        <div className="bg-white p-5 flex flex-col justify-between" key={item.sys.id}>
          <div>
            {blogs.includes.Asset.map((elem: any) => (
              <div key={item.fields.image.sys.id}>
                {item.fields.image.sys.id == elem.sys.id ?
                  <Image src={"https:" + elem.fields.file.url} alt="" height={400} width={400} className="h-64" /> : <div></div>}
              </div>
            ))}
          </div>
          <h1 className="text-3xl pt-2 font-bold">{item.fields.title}</h1>
          <p className="text-md pt-2 font-mediumbold text-justify">{item.fields.desc}</p>
          <h2 className="text-xl pt-2 font-bold">{item.fields.price}</h2>
          <div className="pt-2">
            <button className=" bg-black text-white font-semibold border border-white hover:border hover:border-black py-2 px-4 rounded-lg mr-3 hover:bg-white hover:text-black duration-500">Add To Cart</button>
            <button className=" bg-black text-white font-semibold border border-white hover:border-black py-2 px-4 rounded-lg hover:bg-white hover:text-black duration-500">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  )

}