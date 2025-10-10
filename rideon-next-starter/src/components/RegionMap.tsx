export default function RegionMap() {
  const regions = [
    { name:"서울북부권", href:"/regions/seoul-north", style:"top-[48%] left-[42%]" },
    { name:"서울남부권", href:"/regions/seoul-south", style:"top-[55%] left-[42%]" },
    { name:"경기북부권", href:"/regions/gg-north", style:"top-[62%] left-[33%]" },
    { name:"경기남부권", href:"/regions/gg-south", style:"top-[62%] left-[51%]" },
    { name:"강원권", href:"/regions/gangwon", style:"top-[48%] left-[60%]" },
    { name:"충청권", href:"/regions/chungcheong", style:"top-[62%] left-[69%]" },
    { name:"호남권", href:"/regions/honam", style:"top-[75%] left-[33%]" },
    { name:"영남권", href:"/regions/yeongnam", style:"top-[75%] left-[51%]" },
    { name:"제주권", href:"/regions/jeju", style:"top-[88%] left-[42%]" }
  ];
  return (
    <section id="regions" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold">운영지역</h2>
        <div className="relative mt-8 rounded-2xl overflow-hidden border">
          <img src="/map.png" alt="운영지역 전체" className="w-full h-auto"/>
          {regions.map(r=>(
            <a key={r.name} href={r.href}
               className={`absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-white border font-bold text-sm ${r.style}`}>
              {r.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
