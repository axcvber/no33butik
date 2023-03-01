import React from 'react'

const Ust = () => {
  return (
    // <div className='bg-[#111] relative h-5'>
    //   <div className='absolute top-0 left-0 animate-marquee2'>
    //     <span className='text-xs text-white '>
    //       FW 2022/23 SONBAHAR KIŞ SEZONU AÇILDI… SEÇİLİ ÜRÜNLERDE %50'YE VARAN SEZON SONU İNDİRİMİ - 500₺ VE ÜZERİ
    //       SİPARİŞLERDE ÜCRETSİZ KARGO - HIZLI TESLİMAT
    //     </span>
    //   </div>
    // </div>

    <div className='bg-[#111] h-50 relative flex overflow-x-hidden z-50'>
      <div className='animate-marquee whitespace-nowrap'>
        <span className='text-xs text-white'>
          FW 2022/23 SONBAHAR KIŞ SEZONU AÇILDI… SEÇİLİ ÜRÜNLERDE %50'YE VARAN SEZON SONU İNDİRİMİ - 500₺ VE ÜZERİ
          SİPARİŞLERDE ÜCRETSİZ KARGO - HIZLI TESLİMAT
        </span>
      </div>

      {/* <div className='absolute top-0 py-3 animate-marquee2 whitespace-nowrap'>
        <span className='text-xs text-white '>
          FW 2022/23 SONBAHAR KIŞ SEZONU AÇILDI… SEÇİLİ ÜRÜNLERDE %50'YE VARAN SEZON SONU İNDİRİMİ - 500₺ VE ÜZERİ
          SİPARİŞLERDE ÜCRETSİZ KARGO - HIZLI TESLİMAT
        </span>
      </div> */}
    </div>
  )
}

export default Ust
