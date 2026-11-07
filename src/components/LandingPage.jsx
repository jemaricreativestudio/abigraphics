import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiPrinter,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
  FiMaximize2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaTelegramPlane, FaPhone } from "react-icons/fa";

import "../fonts.css";
import logoDark from "../assets/Logo_dark.svg";
import logoWhite from "../assets/Logo_white.svg";
import landingImage from "../assets/landing.jpg";
import HeroImage from "../assets/HeroImage.jpg";
import product1 from "../products/1.jpg";
import product2 from "../products/2.jpg";
import product3 from "../products/3.jpg";
import product4 from "../products/4.jpg";
import product5 from "../products/5.jpg";
import product6 from "../products/6.jpg";

const BRAND = "#091D35";
const SECONDARY = "#FF9700";

const navigation = [
  { key: "home", href: "#home" },
  { key: "storyNav", href: "#story" },
  { key: "cultureNav", href: "#services" },
  { key: "promiseNav", href: "#promise" },
  { key: "contactNav", href: "#contact" },
];

const content = {
  en: {
    navigation: {
      home: "Home",
      storyNav: "About Us",
      cultureNav: "Our Services",
      promiseNav: "Why Choose Us",
      contactNav: "Contact",
    },
    headerContact: "Get in Touch",
    heroEyebrow: "Abi Graphics & Printing",
    heroTitle: "Bring your ideas",
    heroAccent: "To brilliant life.",
    heroDescription:
      "Professional printing and custom graphics services tailored to elevate your brand, style, and everyday gifts with exceptional quality and speed.",
    explore: "Explore Our Services",
    ceremony: "View Products",
    heroImageLabel: "Quality Printing",
   
    originCard: "Custom Printing",
    originCardText: "Made for your brand",
    intro: [
      {
        number: "01",
        title: "Quality Prints",
        text: "Using premium materials and state-of-the-art printing techniques for crystal-clear results.",
      },
      {
        number: "02",
        title: "Fast Service",
        text: "Quick turnaround times to ensure your orders are ready exactly when you need them.",
      },
      {
        number: "03",
        title: "Affordable Prices",
        text: "Top-tier custom printing solutions priced competitively for individuals and businesses.",
      },
    ],
    storyEyebrow: "About Abi Graphics",
    storyTitle: "Transforming your ideas into reality.",
    storyText1:
      "At Abi Graphics and Printing, we specialize in turning creative concepts into tangible, high-quality products. Whether you need custom apparel, personalized gifts, or promotional items, we deliver excellence in every print.",
    storyText2:
      "Today, we help businesses, event organizers, and individuals make a lasting impression with our broad selection of custom printing and branding services.",
  
    buna: "Order Today",
    cultureEyebrow: "What We Offer",
    cultureTitle: "Our Printing Services & Products",
    cultureDescription:
      "Explore our wide range of custom printing solutions designed to make your items stand out.",
    cultureCards: [
      {
        title: "T-Shirt & Apparel Printing",
        text: "Custom high-quality T-shirt printing for events, teams, and unique personal styles.",
      },
      {
        title: "Mug & Drinkware Printing",
        text: "Beautiful custom mugs perfect for gifts, corporate branding, and memorable occasions.",
      },
      {
        title: "Cap & Hat Printing",
        text: "Stylish, durable custom-printed caps to showcase your logo or personal design.",
      },
      {
        title: "Tote Bag Printing",
        text: "Eco-friendly, stylish custom tote bags built for daily use and promotions.",
      },
      {
        title: "Photo Frame & Pen Printing",
        text: "Exquisite photo frames and sleek customized pens for professional and personal gifts.",
      },
      {
        title: "Key Holders & Gift Items",
        text: "Unique key holders and a wide variety of related promotional gift items.",
      },
    ],
    moment: "SERVICE",
    coffeeLove: "✨ High Quality Printing  ✨ Fast Service  ✨ Affordable Prices",
    promiseEyebrow: "Why Choose Abi",
    promiseTitle: "Committed to excellence in every detail.",
    promiseDescription:
      "Our core values ensure you receive the best results for all your printing needs.",
    promises: [
      {
        title: "Excellence",
        text: "Flawless prints with sharp details and vibrant, long-lasting colors.",
      },
      {
        title: "Speed",
        text: "Efficient production workflows designed to respect your deadlines.",
      },
      {
        title: "Value",
        text: "Exceptional quality backed by fair, transparent, and affordable pricing.",
      },
      {
        title: "Creativity",
        text: "Turning your unique ideas and concepts into breathtaking physical items.",
      },
    ],
    contactEyebrow: "Get in Touch",
    contactTitle: "Let's turn your ideas into reality today!",
    contactDescription:
      "Contact Abi Graphics and Printing now to place your order or discuss your next custom project.",
    footerTagline: "Abi Graphics & Printing",
    copyright: "All rights reserved.",
    switchLanguage: "አማርኛ",
    themeLight: "Switch to daylight mode",
    themeDark: "Switch to dark mode",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  am: {
    navigation: {
      home: "መነሻ",
      storyNav: "ስለ እኛ",
      cultureNav: " አገልግሎቶቻችን",
      promiseNav: "ለምን እኛን?",
      contactNav: "ያግኙን",
    },
    headerContact: "ያግኙን",
    heroEyebrow: "አቢ ግራፊክስ እና ህትመት",
    heroTitle: "ሀሳብዎን",
    heroAccent: "ወደ እውነት እንቀይራለን።",
    heroDescription:
      "ለብራንድዎ፣ ለስታይልዎ እና ለስጦታዎችዎ የሚሆን ጥራት ያለው የህትመት እና የንድፍ አገልግሎት በታላቅ  ፍጥነት እና በተመጣጣኝ ዋጋ እናቀርባለን።",
    explore: "አገልግሎቶቻችንን ይመልከቱ",
    ceremony: "ምርቶቻችን",
    heroImageLabel: "ጥራት ያለው ህትመት",
    originCard: "ልዩ ህትመቶች",
    originCardText: "ለእርስዎ ፍላጎት የተዘጋጀ",
    intro: [
      {
        number: "01",
        title: "ጥራት ያለው ህትመት",
        text: "ለዓይን የሚስብ፣ ግልጽ እና ዘላቂነት ያላቸውን ዘመናዊ የህትመት እቃዎች እንጠቀማለን።",
      },
      {
        number: "02",
        title: "ፈጣን አገልግሎት",
        text: "ሥራዎችዎን በሚፈልጉት ሰዓት እና በታቀደለት ጊዜ እናደርሳለን።",
      },
      {
        number: "03",
        title: "ተመጣጣኝ ዋጋ",
        text: "ለድርጅቶችም ሆነ ለግለሰቦች የሚመጥን ፍትሃዊ እና ጥራት ያለው ዋጋ።",
      },
    ],
    storyEyebrow: "ስለ አቢ ግራፊክስ",
    storyTitle: "የእርስዎን ሃሳብ ወደ እውነት እንቀይር!",
    storyText1:
      "አቢ ግራፊክስ እና ህትመት የተለያዩ የህትመት ስራዎችን በከፍተኛ ጥራት በማከናወን ላይ ይገኛል። የቲሸርት፣ የካፕ፣ የስጦታ እቃዎች እና ሌሎች ማስታወቂያዎችን እና ህትመቶችን እናስተናግዳለን።",
    storyText2:
      "ዛሬውኑ ያዙን እና የእርስዎን ሃሳብ ወደ ውብ እና ተጨባጭ ውጤት እንለውጣለን።",
   
    buna: "አሁን ያዙን",
    cultureEyebrow: "የምንሰጣቸው አገልግሎቶች",
    cultureTitle: "የህትመት እና ስጦታ አገልግሎቶቻችን",
    cultureDescription: "በማንኛውም ጊዜ እና ሁኔታ ሊጠቀሙባቸው የሚችሉ ጥራት ያላቸው የህትመት ምርቶች።",
    cultureCards: [
      {
        title: "ቲሸርት ህትመት (T-Shirt Printing)",
        text: "ለተለያዩ ክንውኖች፣ ቡድኖች እና የድርጅት ስራዎች የሚሆን ማራኪ የቲሸርት ህትመት።",
      },
      {
        title: "የቡና እቃዎች ህትመት (Mug Printing)",
        text: "ለስጦታ እና ለብራንድ ማስታወቂያ የሚሆን ውብ የማግ ህትመት አገልግሎት።",
      },
      {
        title: "የካፕ ህትመት (Cap Printing)",
        text: "ማራኪ እና ጥራት ያላቸው ቆቦች ላይ የሚደረግ የလိုጎ እና የጽሁፍ ህትመት።",
      },
      {
        title: "የቦርሳ ህትመት (Tote Bag Printing)",
        text: "ለተለያዩ አገልግሎቶች የሚውሉ ዘመናዊ የቶቴ ቦርሳዎች ህትመት።",
      },
      {
        title: "የፎቶ ፍሬም እና እስክሪብቶ ህትመት",
        text: "ልዩ የፎቶ ፍሬሞች እና የተወለወሉ የተለያየ ዓይነት እስክሪብቶዎች ህትመት።",
      },
      {
        title: "ቁልፍ መያዣ እና ሌሎች የስጦታ እቃዎች",
        text: "ቁልፍ መያዣዎች (Key Holders) እና ሌሎች ተዛማጅ የስጦታ እቃዎች።",
      },
    ],
    moment: "አገልግሎት",
    coffeeLove: "✨ ጥራት ያለው ህትመት  ✨ ፈጣን አገልግሎት  ✨ በተመጣጣኝ ዋጋ",
    promiseEyebrow: "ለምን አቢን ይመርጣሉ?",
    promiseTitle: "በእያንዳንዱ ዝርዝር ስራ ላይ ጥራትን እናስቀድማለን።",
    promiseDescription: "ለህትመት ፍላጎቶችዎ ሁልጊዜም አስተማማኝ አጋርዎ ነን።",
    promises: [
      {
        title: "ጥራት",
        text: "ግልጽ እና ውብ ቀለማትን የያዙ ጥራት ያላቸው ህትመቶች።",
      },
      {
        title: "ፍጥነት",
        text: "ሰዓቱን የጠበቀ እና ፈጣን የሆነ የአገልግሎት አሰጣጥ።",
      },
      {
        title: "ዋጋ",
        text: "ለኪስዎ በሚመጥን መልኩ የተዘጋጀ ተመጣጣኝ ዋጋ።",
      },
      {
        title: "ፈጠራ",
        text: "ሃሳብዎን ወደ ማራኪ ውጤት የሚቀይር የሰለጠነ ባለሙያ።",
      },
    ],
    contactEyebrow: "ያግኙን",
    contactTitle: "ዛሬውኑ ያዙን እና የእርስዎን ሃሳብ ወደ እውነት እንቀይር!",
    contactDescription:
      "ለማንኛውም የህትመት ስራ ከኛ ጋር ይገናኙ፤ ፈጣን እና ጥራት ያለው አገልግሎት ያግኙ።",
    footerTagline: "አቢ ግራፊክስ እና ህትመት",
    copyright: "መብቱ የተጠበቀ ነው።",
    switchLanguage: "English",
    themeLight: "ወደ ቀን ገጽታ ይቀይሩ",
    themeDark: "ወደ ጨለማ ገጽታ ይቀይሩ",
    openMenu: "ምናሌውን ይክፈቱ",
    closeMenu: "ምናሌውን ይዝጉ",
  },
};

function BeanBlur({ dark = false }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className={`absolute -left-24 top-16 h-64 w-64 rounded-full blur-3xl ${
          dark ? "bg-white/[0.05]" : "bg-[#091D35]/[0.08]"
        }`}
      />
      <div
        className={`absolute -right-24 top-[38%] h-80 w-80 rounded-full blur-3xl ${
          dark ? "bg-[#FF9700]/[0.12]" : "bg-[#FF9700]/[0.10]"
        }`}
      />
      <div
        className={`absolute -bottom-24 left-[30%] h-72 w-72 rounded-full blur-3xl ${
          dark ? "bg-white/[0.04]" : "bg-[#091D35]/[0.06]"
        }`}
      />
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, dark }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <p
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF9700]`}
      >
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-5 max-w-xl text-base leading-7 ${
            dark ? "text-white/65" : "text-stone-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = content[language];
  const isAmharic = language === "am";
  const currentLogo = darkMode ? logoWhite : logoDark;

  const page = darkMode
    ? "bg-[#0B131D] text-[#FFF9F0]"
    : "bg-[#F7F9FC] text-[#091D35]";

  const mutedText = darkMode ? "text-white/65" : "text-stone-600";
  const sectionBg = darkMode ? "bg-[#111C2A]" : "bg-[#EEF3F8]";

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen && !selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, selectedImage]);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const productImages = [product1, product2, product3, product4, product5, product6];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div
      lang={isAmharic ? "am" : "en"}
      className={`${page} min-h-screen overflow-hidden transition-colors duration-300 ${
        isAmharic ? "amharic-text" : ""
      }`}
      style={{
        "--abi-brand": BRAND,
        "--abi-secondary": SECONDARY,
      }}
    >
      {/* Header */}
      <header className="relative z-50">
        <div className="relative z-[60] mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#home" aria-label="Home" className="flex shrink-0 items-center">
            <img src={currentLogo} alt="Abi Graphics logo" className="h-12 w-auto" />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-sm transition-colors hover:text-[#FF9700] ${
                  darkMode ? "text-white/75" : "text-stone-700"
                }`}
              >
                {t.navigation[item.key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language switch */}
            <button
              type="button"
              onClick={() => {
                setLanguage(isAmharic ? "en" : "am");
                closeMenu();
              }}
              aria-label={isAmharic ? "Switch to English" : "Switch to Amharic"}
              className={`rounded-full border px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                darkMode
                  ? "border-white/15 hover:bg-white/10"
                  : "border-[#091D35]/15 hover:bg-[#091D35]/5"
              }`}
            >
              {isAmharic ? "EN" : "አማ"}
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              aria-label={t.headerContact}
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#091D35] px-3 text-sm font-medium text-white transition hover:bg-[#122B4B] sm:px-5 border border-[#FF9700]/30"
            >
              <span className="sm:hidden">
                <FiArrowRight size={17} />
              </span>
              <span className="hidden sm:inline">{t.headerContact}</span>
              <FiArrowRight className="ml-2 hidden sm:inline text-[#FF9700]" />
            </a>

            {/* Theme switch */}
            <button
              type="button"
              onClick={() => {
                setDarkMode((value) => !value);
                closeMenu();
              }}
              aria-label={darkMode ? t.themeLight : t.themeDark}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
                darkMode
                  ? "border-white/15 hover:bg-white/10"
                  : "border-[#091D35]/15 hover:bg-[#091D35]/5"
              }`}
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={menuOpen}
              className={`flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
                darkMode
                  ? "border-white/15 hover:bg-white/10"
                  : "border-[#091D35]/15 hover:bg-[#091D35]/5"
              }`}
            >
              {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <>
            <button
              type="button"
              aria-label={t.closeMenu}
              onClick={closeMenu}
              className="fixed inset-0 z-45 cursor-default bg-black/40 backdrop-blur-md transition-opacity duration-300 lg:hidden"
            />

            <nav
              aria-label="Mobile navigation"
              className={`fixed left-4 right-4 top-24 z-50 mx-auto max-h-[calc(100dvh-7rem)] max-w-md overflow-y-auto rounded-3xl border p-5 shadow-2xl backdrop-blur-2xl lg:hidden ${
                darkMode
                  ? "border-white/10 bg-[#0B131D]/95 text-[#FFF9F0]"
                  : "border-white/70 bg-[#F7F9FC]/95 text-[#091D35]"
              }`}
            >
              <div className="mb-4 flex items-center justify-between px-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF9700]">
                  {t.heroEyebrow}
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label={t.closeMenu}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#091D35]/15 transition hover:bg-[#091D35]/10"
                >
                  <FiX size={19} />
                </button>
              </div>

              <div className="space-y-1">
                {navigation.map((item, index) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-2xl px-4 py-4 text-base font-medium transition duration-200 hover:bg-[#091D35]/10"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-xs tracking-widest text-[#FF9700]">
                        0{index + 1}
                      </span>
                      {t.navigation[item.key]}
                    </span>
                    <FiArrowRight className="opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100" />
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center rounded-full bg-[#091D35] px-5 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#122B4B]"
              >
                {t.headerContact}
                <FiArrowRight className="ml-2 text-[#FF9700]" />
              </a>
            </nav>
          </>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative isolate min-h-[700px] scroll-mt-24 overflow-hidden sm:min-h-[760px] lg:min-h-[800px]"
        >
          <img
            src={HeroImage}
            alt={t.heroImageLabel}
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050D17]/95 via-[#091D35]/75 to-[#091D35]/20" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#050D17]/60 via-transparent to-transparent" />

          <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center px-5 py-20 sm:min-h-[760px] sm:px-8 md:py-28 lg:min-h-[800px] lg:px-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.13 } },
              }}
              className="relative z-10 max-w-3xl text-white"
            >
              <motion.p
                variants={fadeUp}
                className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF9700]"
              >
                <span className="h-px w-9 bg-[#FF9700]" />
                {t.heroEyebrow}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl"
              >
                {t.heroTitle}
                <span className="mt-2 block font-medium italic text-[#FF9700]">
                  {t.heroAccent}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-base leading-8 text-white/85 sm:text-lg"
              >
                {t.heroDescription}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#services"
                  className="inline-flex items-center rounded-full bg-[#FF9700] px-7 py-4 text-sm font-semibold text-[#091D35] shadow-lg shadow-[#FF9700]/20 transition hover:-translate-y-0.5 hover:bg-[#e08500]"
                >
                  {t.explore}
                  <FiArrowRight className="ml-3 shrink-0" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-white/90 transition hover:text-white"
                >
                  {t.ceremony}
                  <FiArrowDownRight className="text-[#FF9700]" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-6 right-5 z-10 max-w-xs text-right text-white sm:bottom-8 sm:right-8 lg:right-10 hidden sm:block"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#FF9700]">
                {t.heroImageLabel}
              </p>
              <p className="mt-3 text-xl font-semibold leading-tight sm:text-2xl">
                {t.heroImageTitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Professional 3-Card Image Slideshow (Light Border & Smooth Motion) */}
        <section className={`relative py-24 overflow-hidden ${darkMode ? "bg-[#09101A]" : "bg-white"}`}>
          <BeanBlur dark={darkMode} />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Our Collection"
              title="Featured Products"
              description="Browse our smooth slider below. Click any image to view it in full high resolution."
              dark={darkMode}
            />

            {/* Slider Container displaying 3 cards simultaneously */}
            <div className="relative flex items-center justify-center py-6 min-h-[360px] sm:min-h-[460px]">
              {/* Left Navigation Button */}
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-0 sm:left-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#FF9700] backdrop-blur-md border border-white/20 shadow-xl transition hover:bg-[#FF9700] hover:text-[#091D35]"
              >
                <FiChevronLeft size={24} />
              </button>

              {/* Right Navigation Button */}
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-0 sm:right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#FF9700] backdrop-blur-md border border-white/20 shadow-xl transition hover:bg-[#FF9700] hover:text-[#091D35]"
              >
                <FiChevronRight size={24} />
              </button>

              {/* 3-Card Smooth Motion Layout */}
              <div className="flex w-full items-center justify-center gap-4 sm:gap-6 px-12">
                {[-1, 0, 1].map((offset) => {
                  const slideIndex = (currentIndex + offset + productImages.length) % productImages.length;
                  const isCenter = offset === 0;

                  return (
                    <motion.div
                      key={`${slideIndex}-${offset}`}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: isCenter ? 1 : 0.45,
                        scale: isCenter ? 1 : 0.88,
                        zIndex: isCenter ? 20 : 10,
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => {
                        if (isCenter) {
                          setSelectedImage(productImages[slideIndex]);
                        } else {
                          setCurrentIndex(slideIndex);
                        }
                      }}
                      className={`group relative cursor-pointer overflow-hidden rounded-[2.25rem] bg-[#091D35] shadow-2xl transition-all duration-300 border ${
                        darkMode ? "border-white/15" : "border-stone-200"
                      } ${
                        isCenter
                          ? "w-full max-w-[340px] sm:max-w-[400px] h-[360px] sm:h-[460px] border-[#FF9700]/50"
                          : "hidden md:block w-full max-w-[260px] lg:max-w-[300px] h-[300px] sm:h-[380px]"
                      }`}
                    >
                      <img
                        src={productImages[slideIndex]}
                        alt={`Product ${slideIndex + 1}`}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {isCenter && (
                        <div className="absolute inset-0 bg-gradient-to-t from-[#091D35]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                          <div className="flex w-full items-center justify-between text-white">
                            <span className="text-sm font-semibold tracking-wide text-[#FF9700]">
                              View Full Image
                            </span>
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white">
                              <FiMaximize2 size={18} />
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="mt-8 flex justify-center gap-2">
              {productImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-8 bg-[#FF9700]" : "w-2.5 bg-stone-400/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Fullscreen Image Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-[2.5rem] bg-[#091D35] shadow-2xl border border-white/20 p-2 sm:p-4"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close modal"
                  className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-[#FF9700] hover:text-[#091D35]"
                >
                  <FiX size={22} />
                </button>
                <img
                  src={selectedImage}
                  alt="Expanded Product"
                  className="max-h-[82vh] w-auto max-w-full rounded-[2rem] object-contain mx-auto shadow-inner"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Intro */}
        <section className={`${sectionBg} relative`}>
          <BeanBlur dark={darkMode} />

          <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-3 md:gap-10 md:py-16 lg:px-10">
            {t.intro.map((item) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border-l-2 border-[#FF9700] pl-5"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-[#FF9700]">
                  {item.number}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className={`mt-3 max-w-sm text-sm leading-7 ${mutedText}`}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section id="story" className="relative scroll-mt-20 overflow-hidden">
          <BeanBlur dark={darkMode} />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="relative"
            >
              <img
                src={landingImage}
                alt={t.storyTitle}
                className="relative aspect-[5/4] w-full rounded-[1.75rem] object-cover shadow-xl"
              />

              <div className="absolute -bottom-5 right-4 rounded-2xl bg-[#091D35] border border-[#FF9700]/30 px-5 py-4 text-white shadow-xl sm:right-8 sm:px-7">
                <p className="text-lg font-semibold text-[#FF9700]">አቢ ግራፊክስ</p>
                <p className="mt-1 text-xs text-white/75">{t.buna}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="pt-5 lg:pt-0"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF9700]">
                {t.storyEyebrow}
              </p>

              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                {t.storyTitle}
              </h2>

              <p className={`mt-6 leading-8 ${mutedText}`}>{t.storyText1}</p>
              <p className={`mt-4 leading-8 ${mutedText}`}>{t.storyText2}</p>

             
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className={`relative scroll-mt-20 overflow-hidden ${
            darkMode ? "bg-[#111C2A]" : "bg-[#E6ECF4]"
          }`}
        >
          <BeanBlur dark={darkMode} />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-10">
            <SectionHeading
              eyebrow={t.cultureEyebrow}
              title={t.cultureTitle}
              description={t.cultureDescription}
              dark={darkMode}
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.cultureCards.map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5 }}
                  className={`rounded-[1.5rem] border p-7 transition-colors sm:p-8 ${
                    darkMode
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-[#091D35]/10 bg-white/80 shadow-md"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF9700]/15 text-[#FF9700]">
                    <FiPrinter size={22} />
                  </div>

                  <p className="mt-7 text-xs font-semibold tracking-[0.15em] text-[#FF9700]">
                    {t.moment} 0{index + 1}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>

                  <p className={`mt-4 text-sm leading-7 ${mutedText}`}>
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 text-center rounded-2xl bg-[#091D35] p-6 text-white shadow-lg border border-[#FF9700]/30 max-w-3xl mx-auto">
              <p className={`text-sm sm:text-base font-semibold text-[#FF9700]`}>
                {t.coffeeLove}
              </p>
            </div>
          </div>
        </section>

        {/* Promise */}
        <section
          id="promise"
          className="relative scroll-mt-20 overflow-hidden"
        >
          <BeanBlur dark={darkMode} />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-10">
            <SectionHeading
              eyebrow={t.promiseEyebrow}
              title={t.promiseTitle}
              description={t.promiseDescription}
              dark={darkMode}
            />

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {t.promises.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className={`border-t-2 pt-6 ${
                    darkMode ? "border-[#FF9700]" : "border-[#091D35]"
                  }`}
                >
                  <p className="text-3xl font-semibold text-[#FF9700]">
                    0{index + 1}
                  </p>

                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

                  <p className={`mt-3 text-sm leading-7 ${mutedText}`}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="relative scroll-mt-20 overflow-hidden bg-[#091D35] text-white border-t border-[#FF9700]/20"
        >
          <BeanBlur dark />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1fr_auto] lg:px-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF9700]">
                {t.contactEyebrow}
              </p>

              <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                {t.contactTitle}
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/75">
                {t.contactDescription}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 lg:justify-end"
            >
              <a
                href="https://t.me/Abbi_Graphics"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition hover:bg-[#FF9700] hover:text-[#091D35] hover:border-[#FF9700]"
              >
                <FaTelegramPlane size={19} />
              </a>

              <a
                href="tel:0701953230"
                aria-label="Call us"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition hover:bg-[#FF9700] hover:text-[#091D35] hover:border-[#FF9700]"
              >
                <FaPhone size={19} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`relative overflow-hidden border-t ${
          darkMode
            ? "bg-[#060A10] border-white/10"
            : "bg-[#E6ECF4] border-[#091D35]/10"
        }`}
      >
        <BeanBlur dark={darkMode} />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-5 py-8 text-center sm:px-8 md:flex-row md:items-center md:justify-between md:text-left lg:px-10">
          <a href="#home" aria-label="Home" className="inline-flex w-fit items-center">
            <img src={currentLogo} alt="Abi Graphics logo" className="h-10 w-auto" />
          </a>

          <nav
            aria-label="Footer navigation"
            className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:gap-x-5 md:gap-y-3"
          >
            {navigation.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-xs transition hover:text-[#FF9700] ${mutedText}`}
              >
                {t.navigation[item.key]}
              </a>
            ))}
          </nav>

          <p className={`text-xs ${mutedText}`}>
            © {new Date().getFullYear()} · {t.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}