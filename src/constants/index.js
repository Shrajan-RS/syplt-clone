const navLinks = [
  {
    id: "home",
    name: "Home",
  },
];

const flavorLists = [
  {
    name: "Chocolate Milk",
    color: "brown",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Stawberry Milk",
    color: "red",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Cookies & Cream",
    color: "blue",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Peanut Butter Chocolate",
    color: "orange",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Vanilla Milkshake",
    color: "white",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Max Chocolate Milk",
    color: "black",
    rotation: "md:rotate-[8deg] rotate-0",
  },
];

const nutrientLists = [
  { label: "Potassium", amount: "245mg", key: 1 },
  { label: "Calcium", amount: "500mg", key: 2 },
  { label: "Vitamin A", amount: "176mcg", key: 3 },
  { label: "Vitamin D", amount: "5mcg", key: 4 },
  { label: "Iron", amount: "1mg", key: 5 },
];

const cards = [
  {
    src: "/videos/f1.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: "/images/p1.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f2.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: "/images/p2.png",
  },
  {
    src: "/videos/f3.mp4",
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: "/images/p3.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f4.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: "/images/p4.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f5.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: "/images/p5.png",
  },
  {
    src: "/videos/f6.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: "/images/p6.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f7.mp4",
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: "/images/p1.png",
    translation: "translate-y-[10%]",
  },
];

const clipPathContent = [
  {
    title: "shelf stable",
    color: "#faeade",
    background: "#c88e64",
    className: "first-title",
    borderColor: "#222123",
    initialClipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    finalClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  {
    title: "protein + caffeine",
    color: "#222123",
    background: "#faeade",
    className: "second-title",
    borderColor: "#222123",
    initialClipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    finalClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  {
    title: "infinitely recyclable",
    color: "#faeade",
    background: "#7F3B2D",
    className: "third-title",
    borderColor: "#222123",
    initialClipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    finalClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  {
    title: "lactose free",
    color: "#2E2D2F",
    background: "#FDE775",
    className: "fourth-title",
    borderColor: "#222123",
    initialClipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    finalClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
];

const socialLinks = [
  {
    name: "youTube",
    src: "/images/yt.svg",
  },
  {
    name: "instagram",
    src: "/images/insta.svg",
  },
  {
    name: "tikTok",
    src: "/images/tiktok.svg",
  },
];

export { flavorLists, nutrientLists, cards, navLinks, clipPathContent, socialLinks };
