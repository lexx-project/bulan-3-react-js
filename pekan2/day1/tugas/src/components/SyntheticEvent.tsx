export default function SyntheticEvent() {
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("Link DI Klik Tapi Berhasil Di Cegah");
  };

  return (
    <>
      <div className="p-4 m-4 justify-center items-center flex flex-col ">
        <h1 className="text-xl font-semibold">Contoh Synthetic Event</h1>
        <a
          className="cursor-pointer bg-blue-500 p-2 rounded-md mt-2 text-white"
          href="https://zephyre.my.id"
          onClick={handleClick}
        >
          Klik
        </a>
        <p>(Hasil Ada Di console log)</p>
      </div>
    </>
  );
}
