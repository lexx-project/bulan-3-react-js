export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Cerita Kami</h2>
          <p className="mt-4 text-gray-600">
            Lexx Store dimulai dari sebuah ide sederhana: menyediakan produk
            berkualitas tinggi dengan harga terjangkau untuk semua orang. Kami
            percaya bahwa setiap orang berhak mendapatkan yang terbaik tanpa
            harus menguras kantong.
          </p>
          <p className="mt-4 text-gray-600">
            Perjalanan kami dimulai pada tahun 2023 di sebuah garasi kecil.
            Dengan semangat dan kerja keras, kami tumbuh menjadi toko online
            yang melayani ribuan pelanggan di seluruh Indonesia. Misi kami
            adalah untuk terus berinovasi dan memberikan pengalaman berbelanja
            yang tak terlupakan.
          </p>
        </div>
        <div>
          <img
            src="https://upload.lexxganz.my.id/uploads/Gemini_Generated_Image_dd5ai3dd5ai3dd5a%20(1).png"
            alt="Our Story"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
