export default function Features() {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold mt-10">
          Kenapa Harus Memilih Kami?
        </h1>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4 ms-15">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full md:w-1/3">
            <img
              src="https://upload.lexxganz.my.id/uploads/Quality.png"
              alt=""
              className="mb-4 mx-auto h-15   "
            />
            <h2 className="text-xl font-semibold mb-4">Produk Berkualitas</h2>
            <p className="text-gray-700">
              Kami menyediakan produk-produk terbaik dengan kualitas terjamin
              untuk kepuasan Anda.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full md:w-1/3">
            <img
              src="https://upload.lexxganz.my.id/uploads/Affortable%20(2).png"
              alt=""
              className="mb-4 mx-auto h-20  "
            />
            <h2 className="text-xl font-semibold mb-4">Harga Terjangkau</h2>
            <p className="text-gray-700">
              Nikmati harga yang kompetitif tanpa mengorbankan kualitas. Belanja
              hemat, hati senang.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full md:w-1/3">
            <img
              src="https://upload.lexxganz.my.id/uploads/CustomerServices.png"
              alt=""
              className="mb-4 mx-auto h-20"
            />
            <h2 className="text-xl font-semibold mb-4">Pelayanan Terbaik</h2>
            <p className="text-gray-700">
              Tim kami siap membantu Anda dengan pelayanan yang ramah dan
              responsif.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
