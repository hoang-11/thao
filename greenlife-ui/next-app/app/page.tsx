import PlantCard from '@/components/shop/PlantCard';
import { plants, services } from '@/lib/mockData';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="overflow-hidden pt-24">
      <section className="relative min-h-[85vh] px-6 py-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-nature-100/50 backdrop-blur-md rounded-full text-emerald-800 text-sm font-bold mb-6 border border-emerald-200">
              Nền tảng cây xanh #1 Việt Nam
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
              Mang <span className="text-primary italic">Thiên Nhiên</span> Vào Không Gian Sống
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              GreenLife cung cấp giải pháp chọn cây, chăm sóc và tư vấn công nghệ cho không gian xanh của bạn.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="btn-primary inline-flex items-center gap-2 text-lg">
                Mua Ngay
              </Link>
              <Link href="/services" className="btn-secondary inline-flex items-center gap-2 text-lg">
                Xem Dịch Vụ
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative z-10 w-full h-[580px] rounded-[70px] overflow-hidden shadow-2xl border-8 border-white/50 rotate-3">
              <img
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=800"
                alt="Featured Plant"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Tại sao chọn GreenLife?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto italic">
              Chúng tôi không chỉ bán cây, mà còn mang đến trải nghiệm dịch vụ cây cảnh toàn diện.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map(service => (
              <div key={service.id} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <p className="font-semibold text-primary">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Cây Xanh Nổi Bật</h2>
              <p className="text-slate-500 max-w-xl">Sản phẩm được yêu thích nhất cho phòng khách, văn phòng và quà tặng.</p>
            </div>
            <Link href="/shop" className="font-bold text-primary hover:underline">
              Xem tất cả cửa hàng
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plants.slice(0, 3).map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
