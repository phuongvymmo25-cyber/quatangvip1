import { createFileRoute } from "@tanstack/react-router";
import { Check, Flame, ArrowRight } from "lucide-react";
import { useState } from "react";
import heroAsset from "@/assets/hero-cover.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kiếm Tiền KOL AI Miễn Phí 1 Năm — Quà Tặng Từ Phong" },
      {
        name: "description",
        content:
          "Nhận miễn phí trọn bộ Kiếm Tiền KOL AI 1 năm. Quà tặng giới hạn 25 vé đầu tiên dành cho người đồng hành cùng Phong Menly.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen w-full px-5 py-10 md:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Pill */}
        <div className="pill-border inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide text-accent md:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px] shadow-accent" />
          QUÀ TẶNG GIỚI HẠN — 25 VÉ ĐẦU TIÊN
        </div>

        {/* Headline */}
        <h1 className="mt-8 font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
          <span className="text-gradient-brand">Kiếm Tiền KOL AI</span>
          <br />
          <span className="text-foreground">
            MIỄN PHÍ <span className="text-gradient-brand">1 NĂM</span>
          </span>
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span>Facebook <b className="text-foreground">85K</b></span>
          <span className="text-border">·</span>
          <span>TikTok <b className="text-foreground">50K</b></span>
          <span className="text-border">·</span>
          <span>YouTube <b className="text-foreground">20K</b></span>
        </div>

        {/* Hero card */}
        <div className="card-glow relative mt-8 w-full overflow-hidden rounded-2xl border border-border/60 bg-card md:mt-10 md:rounded-3xl">
          <img
            src={heroAsset.url}
            alt="KOL AI Go Global - Trang bán hàng Phong Menly"
            className="block h-auto w-full"
            width={1920}
            height={1080}
            loading="eager"
          />
        </div>

        {/* Feature checks */}
        <ul className="mt-8 grid w-full grid-cols-2 gap-x-4 gap-y-3 text-left text-xs md:grid-cols-4 md:text-sm">
          {[
            "Không cần kinh nghiệm AI",
            "Kết quả thực tế từ học viên",
            "Hệ thống chạy sau 60 ngày",
            "Bảo đảm hoàn tiền 100%",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/50 text-accent">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <span className="text-foreground/85">{t}</span>
            </li>
          ))}
        </ul>

        {/* Form to receive gift */}
        <form
          onSubmit={onSubmit}
          className="card-glow mt-10 w-full rounded-3xl border border-border/60 bg-card p-6 text-left md:p-8"
        >
          {submitted ? (
            <div className="flex flex-col items-center py-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check className="h-7 w-7" strokeWidth={3} />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold md:text-2xl">
                Đăng ký thành công!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Phong sẽ liên hệ với bạn trong thời gian sớm nhất để gửi quà tặng.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h3 className="font-display text-xl font-bold md:text-2xl">
                  Điền thông tin để nhận quà
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Chỉ còn vài vé cho 25 người đầu tiên.
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                <input
                  type="text"
                  required
                  placeholder="Họ và tên"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-12 w-full rounded-xl border border-border bg-input/40 px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại / Zalo"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="h-12 w-full rounded-xl border border-border bg-input/40 px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
                <input
                  type="email"
                  placeholder="Email (không bắt buộc)"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-12 w-full rounded-xl border border-border bg-input/40 px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>

              <button
                type="submit"
                className="btn-glow mt-5 inline-flex w-full items-center justify-center gap-3 rounded-2xl px-8 py-5 text-base font-bold text-primary-foreground transition md:text-lg"
              >
                <Flame className="h-5 w-5" />
                Nhận Quà Tặng Ngay
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground md:text-sm">
                Hơn <b className="text-foreground">1.000+</b> bạn đã đăng ký · Miễn phí 100%
              </p>
            </>
          )}
        </form>

        <footer className="mt-12 text-xs text-muted-foreground">
          © 2026 KOL AI SYSTEM · Phong Menly
        </footer>
      </div>
    </main>
  );
}
