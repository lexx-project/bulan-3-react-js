# Lexx Store — React E-Commerce Playground

Lexx Store adalah aplikasi e-commerce sederhana berbasis React + Vite yang dibangun untuk latihan minggu ke-3 di program belajar React JS. Proyek ini menampilkan alur dasar toko online: mulai dari tampilan beranda, daftar produk, filter pencarian, detail produk, keranjang belanja, hingga checkout dengan proteksi login sederhana.

## ✨ Fitur Utama

- **Landing Page & Navigasi**

  - Navbar responsif dengan badge keranjang dan state login.
  - Halaman Home dengan hero bertema e-commerce dan section highlight (Why Us).
  - Footer minimalis yang konsisten.

- **Autentikasi Sederhana**

  - Form login dengan validasi dasar dan kredensial statis (`admin / admin123`).
  - Token disimpan di `localStorage`; tombol logout tersedia di navbar.
  - `PrivateRoute` memastikan halaman Checkout hanya diakses ketika login.

- **Daftar Produk & Detail**

  - Pengambilan data produk menggunakan `axios` melalui custom hook `useFetch`.
  - Filter simpel: pencarian berdasarkan judul dan filter kategori.
  - Kartu produk minimalis dengan tombol add-to-cart dan link ke detail.
  - Detail produk ditampilkan di modal overlay (nested route `products/:productId`).

- **Keranjang & Checkout**

  - State keranjang global via context (`useCart`) dengan fungsi add/remove/clear.
  - Badge keranjang otomatis mengikuti jumlah item.
  - Halaman Checkout menampilkan daftar item, ringkasan total, serta tombol checkout.
  - Pop-up konfirmasi checkout dengan daftar item dan tombol konfirmasi.
  - Setelah konfirmasi, keranjang dibersihkan dan user mendapat notifikasi sederhana.

- **Pengalaman Pengguna**
  - Desain responsif untuk mobile & desktop (navbar, card, checkout, modal).
  - Error Boundary global untuk menangkap error tak terduga.
  - Loading & error state pada halaman produk/detail.

## 🛠️ Teknologi

- **Frontend:** React 19 + Vite
- **Routing:** React Router DOM v7
- **State Management:** React Context (`useCart`)
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Linting:** ESLint (konfigurasi Vite default)

## 📁 Struktur Proyek Ringkas

```
src/
├── App.jsx                # Definisi route + ErrorBoundary
├── hooks/
│   ├── useCart.jsx        # Context & hook untuk keranjang
│   └── useFetch.jsx       # Hook fetch data dengan axios
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ErrorBoundary.jsx
│   ├── login/
│   │   ├── ButtonLogin.jsx
│   │   ├── InputLogin.jsx
│   │   └── LabelLogin.jsx
│   ├── home/              # Hero & WhyUs section
│   ├── products/          # CardProduct
│   └── checkout/          # CheckoutItems, PopUpConfirmation, dll.
└── pages/
    ├── Home.jsx
    ├── Products.jsx
    ├── ProductDetail.jsx
    ├── Checkout.jsx
    ├── LoginForm.jsx
    ├── About.jsx
    └── NotFound.jsx
```

## 🔑 Alur Penggunaan

1. Buka halaman **Products** untuk melihat daftar produk.
2. Gunakan **search** atau **filter kategori** untuk menemukan produk.
3. Klik judul produk untuk membuka detail modal.
4. Tekan **Add to cart** untuk menambah item ke keranjang (badge navbar akan bertambah).
5. Masuk ke halaman **Checkout**:
   - Jika belum login, otomatis diarahkan ke halaman login.
   - Gunakan kredensial: `admin` / `admin123`.
6. Di checkout, atur jumlah produk, hapus item, atau lanjutkan checkout.
7. Klik **Proceed to Checkout**, konfirmasi di pop-up, dan keranjang akan dibersihkan.

## 🔄 Custom Hooks

- `useFetch({ url })`  
  Menangani fetch data + state `loading`, `error`.

- `useCart()`  
  Memberikan akses ke `items`, `totalItems`, `totalPrice`, dan aksi `addItem`, `removeItem`, `clearItem`, `clearCart`.

## 🧪 Saran Pengembangan Lanjut

- Tambahkan API auth sungguhan atau integrasi backend.
- Simpan keranjang ke backend / localStorage agar persisten.
- Tambahkan halaman checkout success (`ThanksPopUp.jsx` sudah tersedia sebagai placeholder).
- Tambahkan testing (unit/component) menggunakan Vitest atau React Testing Library.

---

Selamat bereksperimen dengan Lexx Store! 🎉  
Kontribusi dan penyesuaian sesuai kebutuhan sangat dianjurkan.
