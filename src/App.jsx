import { motion } from "framer-motion";

const waLink =
  "https://wa.me/6281225251313?text=Halo%20Mula%20Patisserie,%20saya%20mau%20tanya%20menu%20dan%20reservasi";

const business = {
  name: "Mula Patisserie",
  rating: "4.8",
  reviews: "1.949 ulasan",
  category: "Cafe & Patisserie",
  address:
    "Jl. Ruko Greenland No.3A blok C, Tlk. Tering, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29432",
  phone: "0812-2525-1313",
  hours: "Setiap hari, 10.00 - 22.00",
  mapsCode: "42FW+RW Tlk. Tering, Kota Batam, Kepulauan Riau",
};

const quickStats = [
  { value: business.rating, label: "Rating Google" },
  { value: business.reviews, label: "Ulasan pelanggan" },
  { value: "10.00 - 22.00", label: "Jam operasional" },
];

const services = [
  {
    title: "Makan di tempat",
    desc: "Area duduk nyaman untuk nongkrong, kerja, atau quality time.",
    meta: "Suasana cozy",
  },
  {
    title: "Ambil di tepi jalan",
    desc: "Order dulu via WhatsApp, tinggal ambil cepat tanpa antre panjang.",
    meta: "Cepat & praktis",
  },
  {
    title: "Antar tanpa bertemu",
    desc: "Pilihan aman dan fleksibel untuk kamu yang ingin tetap santai di rumah.",
    meta: "Lebih fleksibel",
  },
];

const menuItems = [
  {
    name: "Crepes Creme Brulee",
    tag: "Populer",
    image:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=1200&q=80",
    desc: "Crepes lembut dengan lapisan karamel manis dan aroma vanilla.",
  },
  {
    name: "Hojicha Latte",
    tag: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80",
    desc: "Rasa roasted tea yang halus, creamy, dan comforting.",
  },
  {
    name: "Mula Signature Coffee",
    tag: "Signature",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    desc: "Racikan kopi khas Mula dengan karakter bold dan seimbang.",
  },
  {
    name: "Burnt Cheese Cake",
    tag: "Populer",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80",
    desc: "Cheesecake creamy dengan sentuhan burnt top yang khas.",
  },
];

const testimonials = [
  {
    quote:
      "Tempat cozy, staff good, dan makanannya worth it. Pasti balik lagi.",
    name: "Review Pelanggan",
  },
  {
    quote:
      "Brulee sweet potato dan mochi burnt cheesecake-nya enak banget, unik.",
    name: "Local Guide",
  },
  {
    quote:
      "Vibes-nya chill, pelayanan ramah, cocok buat nongkrong atau kerja santai.",
    name: "Pengunjung Batam",
  },
];

const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <motion.div
      variants={containerStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="mx-auto max-w-3xl text-center"
    >
      <motion.p
        variants={itemFade}
        className="text-xs font-semibold uppercase tracking-[0.25em] text-cocoa"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={itemFade}
        className="mt-3 font-heading text-3xl font-extrabold text-ink sm:text-4xl"
      >
        {title}
      </motion.h2>
      {desc ? (
        <motion.p variants={itemFade} className="mt-3 text-sm text-ink/70 sm:text-base">
          {desc}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

function WhatsAppButton({
  text = "Reservasi / Order via WhatsApp",
  className = "",
  variant = "dark",
}) {
  const variantClass =
    variant === "light"
      ? "bg-paper text-roast border border-roast/20 hover:bg-[#f3e1c9]"
      : "bg-cocoa text-white hover:bg-roast";

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold shadow-soft transition ${variantClass} ${className}`}
    >
      {text}
    </motion.a>
  );
}

function MotionVisual() {
  return (
    <div className="relative h-[300px] overflow-hidden rounded-2xl border border-black/10 bg-[#f5e9d8] sm:h-[340px] lg:h-[420px]">
      <motion.img
        src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&w=1400&q=80"
        alt="Mula Patisserie dessert"
        className="absolute inset-0 h-full w-full object-cover"
        animate={{ scale: [1, 1.08, 1], x: [0, -6, 0], y: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-10 -top-12 h-40 w-40 rounded-full bg-cocoa/20 blur-2xl"
      />
      <motion.div
        animate={{ x: [0, -22, 0], y: [0, 16, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-8 right-0 h-44 w-44 rounded-full bg-roast/20 blur-2xl"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cocoa/25"
      />

      <motion.div
        animate={{ y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[46%] w-[76%] -translate-x-1/2 rounded-2xl border border-black/5 bg-white/80 p-4 shadow-soft backdrop-blur-sm"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-cocoa">
          Signature Pick
        </p>
        <p className="mt-1 font-heading text-lg font-bold text-ink">
          Crepes Creme Brulee
        </p>
        <p className="mt-1 text-xs text-ink/70">Smooth caramel top, soft crepe texture.</p>
      </motion.div>

      <motion.div
        animate={{ x: [0, 12, 0], y: [0, 6, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-7 top-8 rounded-xl bg-white/85 px-3 py-2 text-xs font-bold text-roast shadow-soft"
      >
        Rating 4.8
      </motion.div>

      <motion.img
        src="https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=900&q=80"
        alt="Latte art"
        className="absolute bottom-20 left-6 h-20 w-20 rounded-xl border border-white/50 object-cover shadow-soft"
        animate={{ y: [0, -7, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        animate={{ x: [0, -10, 0], y: [0, -8, 0] }}
        transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 right-7 rounded-xl bg-white/85 px-3 py-2 text-xs font-bold text-roast shadow-soft"
      >
        1.949 ulasan
      </motion.div>

      <motion.img
        src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=900&q=80"
        alt="Pastry showcase"
        className="absolute right-6 top-16 h-20 w-20 rounded-xl border border-white/50 object-cover shadow-soft"
        animate={{ y: [0, 6, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <a href="#top" className="font-heading text-lg font-extrabold">
          {business.name}
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          <a href="#menu" className="transition hover:text-cocoa">
            Menu
          </a>
          <a href="#layanan" className="transition hover:text-cocoa">
            Layanan
          </a>
          <a href="#ulasan" className="transition hover:text-cocoa">
            Ulasan
          </a>
          <a href="#lokasi" className="transition hover:text-cocoa">
            Lokasi
          </a>
        </nav>
        <WhatsAppButton className="hidden md:inline-flex" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="px-4 pb-10 pt-8 sm:px-6 lg:px-10 lg:pt-10">
      <motion.div
        variants={containerStagger}
        initial="hidden"
        animate="show"
        className="grain bg-shift mx-auto grid max-w-6xl gap-7 overflow-hidden rounded-3xl border border-black/5 p-6 shadow-soft sm:p-9 lg:grid-cols-2 lg:p-12"
      >
        <div>
          <motion.p
            variants={itemFade}
            className="inline-flex rounded-full bg-clay px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-roast"
          >
            {business.category} - Batam
          </motion.p>
          <motion.h1
            variants={itemFade}
            className="mt-4 font-heading text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Mula Patisserie Batam
          </motion.h1>
          <motion.p variants={itemFade} className="mt-3 text-lg font-semibold text-cocoa">
            Artisan dessert, signature coffee, dan vibes cozy untuk setiap momen.
          </motion.p>
          <motion.p variants={itemFade} className="mt-4 max-w-xl text-sm text-ink/75 sm:text-base">
            Nikmati menu populer seperti Crepes Creme Brulee, Hojicha Latte, hingga
            Burnt Cheese Cake. Bisa dine in, pickup, atau delivery tanpa bertemu.
          </motion.p>
          <motion.div variants={itemFade} className="mt-7 flex flex-wrap gap-3">
            <WhatsAppButton />
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/50 hover:bg-paper"
            >
              Lihat Menu Populer
            </a>
          </motion.div>
        </div>

        <motion.div variants={itemFade}>
          <MotionVisual />
        </motion.div>
      </motion.div>

      <div className="marquee-wrap mt-5">
        <div className="marquee">
          <span>Crepes Creme Brulee</span>
          <span>Hojicha Latte</span>
          <span>Mula Signature Coffee</span>
          <span>Burnt Cheese Cake</span>
          <span>Carbonara Pasta</span>
          <span>Chicken Nanban with Omelette</span>
          <span>Crepes Creme Brulee</span>
          <span>Hojicha Latte</span>
          <span>Mula Signature Coffee</span>
          <span>Burnt Cheese Cake</span>
          <span>Carbonara Pasta</span>
          <span>Chicken Nanban with Omelette</span>
        </div>
      </div>
    </section>
  );
}

function QuickStats() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-10">
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3"
      >
        {quickStats.map((item) => (
          <motion.article
            key={item.label}
            variants={itemFade}
            whileHover={{ y: -7, scale: 1.02 }}
            className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-soft"
          >
            <p className="font-heading text-3xl font-extrabold text-cocoa sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm font-medium text-ink/70">{item.label}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Menu Populer"
          title="Pilihan favorit pelanggan Mula Patisserie"
          desc="Dessert, coffee, dan comfort food dengan rasa yang konsisten dan presentasi cantik."
        />
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {menuItems.map((item) => (
            <motion.article
              key={item.name}
              variants={itemFade}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft"
            >
              <motion.img
                src={item.image}
                alt={item.name}
                className="h-52 w-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.35 }}
              />
              <div className="p-4">
                <span className="rounded-full bg-[#f8eee2] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-roast">
                  {item.tag}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-ink">{item.name}</h3>
                <p className="mt-1 text-sm text-ink/75">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="layanan" className="px-4 py-14 sm:px-6 lg:px-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#5e3422] via-roast to-[#7d4a2f] p-7 text-paper shadow-soft sm:p-10">
        <div className="pointer-events-none absolute -top-16 right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-[#d7ad83]/25 blur-3xl" />

        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={itemFade}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ebc99f]"
          >
            Layanan
          </motion.p>
          <motion.h2
            variants={itemFade}
            className="mt-3 font-heading text-3xl font-extrabold text-paper sm:text-4xl"
          >
            Fleksibel sesuai cara kamu menikmati Mula
          </motion.h2>
          <motion.p variants={itemFade} className="mt-3 text-sm text-paper/80 sm:text-base">
            Datang langsung, pickup, atau pesan tanpa kontak. Semua dibuat
            supaya tetap nyaman.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemFade}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
            >
              <span className="inline-flex rounded-full bg-[#efd5b5] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-roast">
                {service.meta}
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-paper">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-paper/80">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-8 text-center"
        >
          <WhatsAppButton
            text="Tanya Ketersediaan via WhatsApp"
            variant="light"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="ulasan" className="px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Ulasan"
          title="Kenapa pelanggan suka datang ke Mula Patisserie"
        />
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-5 md:grid-cols-3"
        >
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.name + index}
              variants={itemFade}
              whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.5 : 0.5 }}
              className="rounded-2xl border border-black/5 bg-white p-5 shadow-soft"
            >
              <blockquote className="text-sm leading-relaxed text-ink/80">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-cocoa">
                {item.name}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="lokasi" className="px-4 py-14 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-5xl rounded-3xl bg-[#eddcc2] p-8 shadow-soft sm:p-11"
      >
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-roast">
          Lokasi & Kontak
        </p>
        <h2 className="mt-3 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
          Kunjungi {business.name} di Batam
        </h2>
        <div className="mt-4 space-y-2 text-sm text-ink/75 sm:text-base">
          <p>{business.address}</p>
          <p>{business.hours}</p>
          <p>Telepon: {business.phone}</p>
          <p>Kode lokasi: {business.mapsCode}</p>
        </div>
        <WhatsAppButton text="Chat Sekarang di WhatsApp" className="mt-7" />
      </motion.div>
    </section>
  );
}

function StickyWhatsApp() {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      className="pulse-ring fixed bottom-5 right-5 z-50 inline-flex items-center rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:scale-105"
    >
      Chat Sekarang
    </a>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <QuickStats />
      <MenuSection />
      <ServicesSection />
      <ReviewsSection />
      <LocationSection />
      <StickyWhatsApp />
    </div>
  );
}
