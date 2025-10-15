import ThemeToggle from "../components/ThemeTogle";
import UserInfo from "../components/UserInfo";
import ProductList from "../components/ProductList";
import CartDisplay from "../components/CartDisplay";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold">Tugas No 1 </h1>
        <UserInfo />
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl font-bold">Tugas No 2 </h1>
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl font-bold">Tugas No 3 </h1>
        <p>HEADER</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl font-bold">Tugas No 4</h1>
        <p>UserInfo Sudah Mengguanakan Custom Hooks</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl font-bold">Tugas No 5</h1>
        <div className="mt-6 grid w-full max-w-4xl gap-8 lg:grid-cols-2">
          <ProductList />
          <CartDisplay />
        </div>
      </div>
    </div>
  );
}
