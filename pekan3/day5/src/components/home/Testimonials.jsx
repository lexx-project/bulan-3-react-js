export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="mt-4 text-gray-500">
            Kami bangga memiliki ribuan pelanggan yang puas dengan layanan dan
            produk kami.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              "Kualitas produknya luar biasa! Sangat puas dengan pembelian saya.
              Pasti akan belanja di sini lagi."
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://upload.lexxganz.my.id/uploads/Avatar.png"
                alt="Andi Pratama"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Andi Pratama</p>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              "Pengirimannya cepat dan packingnya sangat aman. Barangnya sampai
              tanpa ada cacat sedikit pun. Recommended seller!"
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://upload.lexxganz.my.id/uploads/Avatar.png"
                alt="Siti Aminah"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Dono Sumarno</p>
                <p className="text-sm text-gray-500">Graphic Designer</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              "Layanan pelanggannya sangat responsif dan membantu. Saya punya
              pertanyaan dan langsung dijawab dengan ramah."
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://upload.lexxganz.my.id/uploads/Avatar.png"
                alt="Budi Santoso"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Budi Santoso</p>
                <p className="text-sm text-gray-500">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
