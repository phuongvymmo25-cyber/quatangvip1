import { createFileRoute } from "@tanstack/react-router";
import { Check, Flame, ArrowRight, Play, Wrench, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-creator.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quy Trình 0 - 100K Follow — Quà Tặng Từ Phong" },
      {
        name: "description",
        content:
          "Nhận miễn phí trọn bộ quy trình xây kênh 0 - 100K follow trên Facebook, YouTube và TikTok cùng Phong.",
      },
      { property: "og:title", content: "Quy Trình 0 - 100K Follow — Quà Tặng Từ Phong" },
      {
        property: "og:description",
        content: "Quà tặng giới hạn dành cho người đồng hành cùng Phong trên hành trình xây kênh.",
      },
    ],
  }),
  component: Landing,
});

const ZALO = "https://zalo.me/g/itsjuww101bz3fspzzh1";
const FB = "https://youtu.be/43dAqVlHRbY";
const YT = "https://youtu.be/hllLY4JZuJw";
const TOOL_VIDEO = "https://youtu.be/r1wit0EZAX0";
const TOOL_LINK = "https://imobie.sjv.io/c/6826320/2231409/10066";

function Landing() {
  return (
    <main className="min-h-screen w-full px-5 py-10 md:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Pill */}
        <div className="pill-border inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide text-accent md:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px] shadow-accent" />
          QUÀ TẶNG GIỚI HẠN — DÀNH CHO NGƯỜI ĐỒNG HÀNH
        </div>

        {/* Headline */}
        <h1 className="mt-8 font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
          <span className="text-gradient-gold">Chuyển Giao Quy Trình</span>
          <br />
          <span className="text-foreground">
            0 - <span className="text-gradient-gold">100K Follow</span>
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-sm text-muted-foreground md:text-base">
          Tôi không bán nó. Đây là <span className="text-foreground/90">“Lòng Biết Ơn”</span> gửi đến
          những người bạn đã theo dõi mình cả hành trình.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span>Facebook <b className="text-foreground">85K</b></span>
          <span className="text-border">·</span>
          <span>TikTok <b className="text-foreground">50K</b></span>
          <span className="text-border">·</span>
          <span>YouTube <b className="text-foreground">20K</b></span>
        </div>

        {/* Hero card */}
        <div className="card-glow relative mt-10 w-full overflow-hidden rounded-3xl border border-border/60 bg-card">
          <div className="relative aspect-[16/10] w-full">
            <img
              src={heroImg}
              alt="Phong - hành trình xây kênh 0 đến 100K follow"
              className="absolute inset-0 h-full w-full object-cover"
              width={1280}
              height={896}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent md:from-background/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-8">
              <div className="ml-auto max-w-[60%] text-right">
                <h2 className="font-display text-4xl font-black leading-[0.9] tracking-tight text-foreground drop-shadow-lg md:text-6xl">
                  QUY TRÌNH<br />0 → 100K<br />
                  <span className="italic font-serif font-semibold text-3xl md:text-5xl text-foreground/90">
                    with Phong
                  </span>
                </h2>
              </div>

              <div className="flex items-end justify-between gap-3">
                <div className="text-left text-xs font-medium text-foreground/90 md:text-sm">
                  Phong Menly · AI Go Global US
                </div>
                <div className="pill-border inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-accent md:text-sm">
                  <Flame className="h-3.5 w-3.5" />
                  KOL AI SYSTEM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature checks */}
        <ul className="mt-8 grid w-full grid-cols-2 gap-x-4 gap-y-3 text-left text-xs md:grid-cols-4 md:text-sm">
          {[
            "Không cần kinh nghiệm",
            "Quy trình thực chiến",
            "Áp dụng cho FB · YT · TikTok",
            "100% miễn phí",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/50 text-accent">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <span className="text-foreground/85">{t}</span>
            </li>
          ))}
        </ul>

        {/* Primary CTA */}
        <a
          href={ZALO}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow mt-10 inline-flex w-full items-center justify-center gap-3 rounded-2xl px-8 py-5 text-base font-bold text-primary-foreground transition md:text-lg"
        >
          <Flame className="h-5 w-5" />
          Nhận Quà Tặng Ngay
          <ArrowRight className="h-5 w-5" />
        </a>
        <p className="mt-3 text-xs text-muted-foreground md:text-sm">
          Hơn <b className="text-foreground">1.000+</b> bạn đã đăng ký · Miễn phí 100%
        </p>

        {/* PHẦN 1 */}
        <section className="mt-20 w-full text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-accent">
            PHẦN 1
          </div>
          <h3 className="font-display text-2xl font-bold md:text-3xl">
            Video chính <span className="text-gradient-gold">20:00</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Buổi chia sẻ trực tiếp sẽ được gửi lại. Tham gia nhóm Zalo để Phong phản hồi bạn ngay lập tức.
          </p>
          <a
            href={ZALO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition hover:border-accent/60 hover:bg-card/80"
          >
            <MessageCircle className="h-4 w-4 text-accent" />
            Phát triển cùng Phong tại đây
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>

        {/* PHẦN 2 */}
        <section className="mt-16 w-full text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-accent">
            PHẦN 2
          </div>
          <h3 className="font-display text-2xl font-bold md:text-3xl">
            Quy trình xây kênh <span className="text-gradient-gold">0 → 100K Follow</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Toàn bộ quy trình thực chiến mình từng chia sẻ — chọn nền tảng bạn muốn bắt đầu.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { label: "Facebook", href: FB, color: "from-blue-500/30 to-blue-700/10" },
              { label: "YouTube", href: YT, color: "from-red-500/30 to-red-700/10" },
              { label: "TikTok", href: "#", color: "from-fuchsia-500/30 to-cyan-500/10", soon: true },
            ].map((p) => (
              <a
                key={p.label}
                href={p.href}
                target={p.soon ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition hover:border-accent/50 ${p.soon ? "pointer-events-none opacity-70" : ""}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-40`} />
                <div className="relative">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Build kênh
                  </div>
                  <div className="mt-1 text-xl font-bold text-foreground">{p.label}</div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    <Play className="h-4 w-4" />
                    {p.soon ? "Sắp ra mắt" : "Xem video"}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* TOOL */}
        <section className="card-glow mt-16 w-full overflow-hidden rounded-3xl border border-border/60 bg-card p-6 text-left md:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Wrench className="h-5 w-5" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">
              Công cụ của dân Pro
            </div>
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">
            Công cụ xây kênh — <span className="text-gradient-gold">nhanh ra kết quả nhất</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Bộ công cụ mình đang dùng hằng ngày để tăng tốc sản xuất nội dung. Xem video hướng dẫn rồi lấy
            công cụ về dùng ngay.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={TOOL_VIDEO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/40 px-5 py-3 text-sm font-medium text-foreground transition hover:border-accent/60"
            >
              <Play className="h-4 w-4 text-accent" />
              Xem video hướng dẫn
            </a>
            <a
              href={TOOL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-primary-foreground"
            >
              Lấy công cụ ngay
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <a
          href={ZALO}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow mt-16 inline-flex w-full items-center justify-center gap-3 rounded-2xl px-8 py-5 text-base font-bold text-primary-foreground transition md:text-lg"
        >
          <Flame className="h-5 w-5" />
          Tham gia nhóm Zalo của Phong
          <ArrowRight className="h-5 w-5" />
        </a>

        <footer className="mt-16 text-xs text-muted-foreground">
          © 2026 KOL AI SYSTEM · Phong Menly
        </footer>
      </div>
    </main>
  );
}
