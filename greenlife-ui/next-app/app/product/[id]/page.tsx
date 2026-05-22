import Link from 'next/link';
import { plants } from '@/lib/mockData';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: Props) {
  const plant = plants.find(item => item.id === params.id);

  if (!plant) {
    notFound();
  }

  return (
    <main className="pt-24 pb-24 px-6 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-sm border border-slate-200 overflow-hidden">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 p-8">
          <div className="rounded-3xl overflow-hidden">
            <img src={plant.image} alt={plant.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="space-y-6">
            <div>
              <Link href="/shop" className="text-sm text-primary hover:underline">← Quay lại cửa hàng</Link>
              <h1 className="text-4xl font-bold mt-4">{plant.name}</h1>
              <p className="text-slate-500 mt-2">{plant.scientificName}</p>
            </div>
            <p className="text-slate-600 leading-relaxed">{plant.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-2">Ánh sáng</h3>
                <p className="font-semibold">{plant.light}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-2">Tưới nước</h3>
                <p className="font-semibold">{plant.water}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-slate-500">Giá</p>
                <p className="text-3xl font-bold text-primary">{plant.price.toLocaleString()}₫</p>
              </div>
              <Link href="/shop" className="btn-primary text-center">
                Thêm vào giỏ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
