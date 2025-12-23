"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Shield, Server, Key, FileCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { useTheme } from "./ThemeProvider";

const STYLE_ID = "security-hero-animations";

export function SecuritySection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<"architecture" | "governance">("architecture");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use theme from hook, default to 'dark' during SSR
  const currentTheme = mounted && theme ? theme : 'dark';

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = `
      @keyframes hero3-intro {
        0% { opacity: 0; transform: translate3d(0, 64px, 0) scale(0.98); filter: blur(12px); }
        60% { filter: blur(0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }
      @keyframes hero3-orbit {
        0% { stroke-dashoffset: 0; transform: rotate(0deg); }
        100% { stroke-dashoffset: -64; transform: rotate(360deg); }
      }
      @keyframes hero3-grid {
        0%, 100% { transform: rotate(-2deg); opacity: 0.7; }
        50% { transform: rotate(2deg); opacity: 1; }
      }
      @keyframes hero3-pulse {
        0%, 100% { stroke-dasharray: 0 200; opacity: 0.2; }
        45%, 60% { stroke-dasharray: 200 0; opacity: 1; }
      }
      @keyframes hero3-glow {
        0%, 100% { opacity: 0.45; transform: translate3d(0,0,0); }
        50% { opacity: 0.9; transform: translate3d(0,-8px,0); }
      }
      @keyframes hero3-drift {
        0%, 100% { transform: translate3d(0,0,0) rotate(-3deg); }
        50% { transform: translate3d(0,-12px,0) rotate(3deg); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") {
      setVisible(true);
      return;
    }

    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const palette = useMemo(
    () =>
      currentTheme === "dark"
        ? {
          surface: "bg-[#271b3d] text-white",
          subtle: "text-zinc-300",
          border: "border-white/12",
          card: "bg-[#33214d]/80",
          accent: "bg-[#3a2555]/60",
          metric: "bg-[#33214d]/60",
          glow: "rgba(139, 92, 246, 0.18)",
          background: {
            color: "#271b3d",
            layers: [
              "radial-gradient(ellipse 80% 60% at 10% -10%, rgba(139, 92, 246, 0.15), transparent 60%)",
              "radial-gradient(ellipse 90% 70% at 90% -20%, rgba(109, 40, 217, 0.12), transparent 70%)",
            ],
            dots:
              "radial-gradient(circle at 25% 25%, rgba(250, 250, 250, 0.08) 0.7px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(250, 250, 250, 0.08) 0.7px, transparent 1px)",
          },
        }
        : {
          surface: "bg-white text-neutral-950",
          subtle: "text-neutral-600",
          border: "border-neutral-200",
          card: "bg-neutral-50",
          accent: "bg-neutral-100",
          metric: "bg-neutral-200/50",
          glow: "rgba(139, 92, 246, 0.12)",
          background: {
            color: "#ffffff",
            layers: [
              "radial-gradient(ellipse 80% 60% at 10% -10%, rgba(139, 92, 246, 0.08), transparent 60%)",
              "radial-gradient(ellipse 90% 70% at 90% -20%, rgba(109, 40, 217, 0.05), transparent 70%)",
            ],
            dots:
              "radial-gradient(circle at 25% 25%, rgba(17, 17, 17, 0.08) 0.7px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(17, 17, 17, 0.05) 0.7px, transparent 1px)",
          },
        },
    [currentTheme]
  );

  const metrics = [
    { label: "Compliance", value: "SOC 2 Type II" },
    { label: "Encryption", value: "AES-256-GCM" },
    { label: "Automation", value: "Workflow Ready" },
  ];

  const modes = useMemo(
    () => ({
      architecture: {
        title: "Fortified Architecture",
        description:
          "Enforce absolute sovereignty over your company knowledge. Our architecture is designed to prevent even metadata leak in air-gapped environments.",
        items: [
          "Native On-Premise & VPC Isolation",
          "Zero-Trust Identity Verification",
          "Air-Gapped Infrastructure Support",
        ],
      },
      governance: {
        title: "Regulatory Governance",
        description:
          "Chatty AI translates complex compliance mandates into automated enforcement, ensuring every interaction adheres to global data privacy laws.",
        items: [
          "Granular RBAC & SSO Enforcement",
          "Immutable Compliance Audit Trails",
          "Automated PII Sanitization",
        ],
      },
    }),
    []
  );

  const activeMode = modes[mode];

  const protocols = [
    {
      name: "Audit Engine",
      detail: "Immutable audit logs track every query and access event, ensuring full accountability and SOX/HIPAA compliance.",
      status: "Full Transparency",
      icon: FileCheck
    },
    {
      name: "Identity Layer",
      detail: "Seamless SSO/SAML integration with OIDC support. Enforce bank-grade MFA across all AI-driven workflows.",
      status: "Zero Trust",
      icon: Key
    },
    {
      name: "Data Sovereignty",
      detail: "AES-256 encryption at rest and TLS 1.3 in transit. Your proprietary intelligence never leaves your network.",
      status: "Secured",
      icon: ShieldCheck
    },
  ];

  const setSpotlight = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--hero3-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--hero3-y", `${event.clientY - rect.top}px`);
  };

  const clearSpotlight = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    target.style.removeProperty("--hero3-x");
    target.style.removeProperty("--hero3-y");
  };

  // Security section ID - used for anchor navigation
  const SECURITY_SECTION_ID = 'security';

  return (
    <div id={SECURITY_SECTION_ID} className={`relative isolate min-h-screen w-full transition-colors duration-700 ${palette.surface}`}>
      <div
        className="pointer-events-none absolute inset-0 -z-30"
        style={{
          backgroundColor: palette.background.color,
          backgroundImage: palette.background.layers.join(", "),
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-80"
        style={{
          backgroundImage: palette.background.dots,
          backgroundSize: "12px 12px",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              currentTheme === "dark"
                ? "radial-gradient(60% 50% at 50% 10%, rgba(139, 92, 246, 0.18), transparent 70%)"
                : "radial-gradient(60% 50% at 50% 10%, rgba(139, 92, 246, 0.12), transparent 70%)",
            filter: "blur(22px)",
          }}
      />

      <section
        ref={sectionRef}
        className={`relative flex min-h-screen w-full flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-24 transition-opacity duration-700 ${visible ? "motion-safe:animate-[hero3-intro_1s_cubic-bezier(.22,.68,0,1)_forwards]" : "opacity-0"
          }`}
      >
        <header className="grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-end">
          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
              <span className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full border px-3 py-1 sm:px-4 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] ${palette.border} ${palette.accent} text-primary`}>
                Enterprise security built in
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA", "SOX"].map(cert => (
                  <span key={cert} className={`rounded-full border px-2 py-0.5 sm:px-3 sm:py-1 text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition duration-500 ${palette.border} opacity-70 ${palette.subtle}`}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight max-w-4xl ${currentTheme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                Fortified intelligence for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-violet-400">mission-critical</span> enterprise.
              </h2>
              <p className={`max-w-2xl text-sm sm:text-base md:text-lg ${palette.subtle} leading-relaxed`}>
                Native on-premise deployment delivers true data sovereignty. Ensure your most sensitive company knowledge remains entirely within your secure network perimeter.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className={`inline-flex items-center gap-2 sm:gap-3 rounded-full border px-3 py-2 sm:px-4 sm:py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] transition w-fit ${palette.border} ${palette.accent}`}>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary animate-pulse" />
                  <span className="hidden sm:inline">Launch Ready</span>
                  <span className="sm:hidden">Ready</span>
                </span>
                <span className={`opacity-40 ${palette.subtle} hidden sm:inline`}>•</span>
                <span className={`${palette.subtle} opacity-70 hidden sm:inline`}>Monochrome Precision</span>
              </div>
              <div className={`inline-flex divide-x ${currentTheme === 'dark' ? 'divide-white/10' : 'divide-neutral-200'} overflow-x-auto rounded-full border text-[10px] sm:text-xs font-bold uppercase w-full sm:w-fit ${palette.border} scrollbar-hide`}>
                {metrics.map((metric) => (
                  <div key={metric.label} className={`flex flex-col px-3 py-2 sm:px-5 sm:py-3 ${palette.metric} min-w-fit`}>
                    <span className={`text-[8px] sm:text-[9px] ${palette.subtle} mb-0.5`}>{metric.label}</span>
                    <span className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`relative flex flex-col gap-3 sm:gap-4 md:gap-5 rounded-2xl sm:rounded-3xl border p-4 sm:p-5 md:p-6 transition-all duration-500 shadow-2xl shadow-primary/5 ${palette.border} ${palette.card}`}>
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="space-y-2 sm:space-y-3">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] text-primary">Control Stack</p>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">{activeMode.title}</h3>
              </div>
              {/* Architecture Visualization */}
              <div className="hidden sm:block relative">
                <div className="relative w-24 h-24">
                  {/* Central Core */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-indigo-500/20 border-2 border-primary/40 flex items-center justify-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Server className="w-8 h-8 text-primary" />
                  </motion.div>
                  {/* Orbiting Nodes */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: i * 5 }}
                      style={{ transformOrigin: 'center center' }}
                    >
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-primary/30 border border-primary/50 flex items-center justify-center"
                        style={{ transform: 'translateY(-12px)' }}
                      >
                        <Shield className="w-3 h-3 text-primary" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed ${palette.subtle}`}>{activeMode.description}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setMode("architecture")}
                className={`flex-1 rounded-full border px-3 py-2 sm:px-4 sm:py-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 ${mode === "architecture" ? "bg-primary text-white scale-105 border-primary" : `${palette.subtle} ${palette.border} hover:bg-black/5 dark:hover:bg-white/5`
                  }`}
              >
                Architecture
              </button>
              <button
                type="button"
                onClick={() => setMode("governance")}
                className={`flex-1 rounded-full border px-3 py-2 sm:px-4 sm:py-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 ${mode === "governance" ? "bg-primary text-white scale-105 border-primary" : `${palette.subtle} ${palette.border} hover:bg-black/5 dark:hover:bg-white/5`
                  }`}
              >
                Governance
              </button>
            </div>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              {activeMode.items.map((item) => (
                <li key={item} className={`flex items-start gap-2 sm:gap-3 ${palette.subtle}`}>
                  <Shield className="mt-0.5 sm:mt-1 h-3 w-3 text-primary flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <div className="grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)] xl:items-stretch">
          {/* Control Stack - Features List */}
          <div className={`order-2 flex flex-col gap-3 sm:gap-4 md:gap-5 rounded-2xl sm:rounded-3xl border p-4 sm:p-5 md:p-6 transition ${palette.border} ${palette.card} xl:order-1`}>
            <div className="flex items-center justify-between">
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] text-primary">Sovereignty Protocols</h3>
              <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] ${currentTheme === 'dark' ? 'text-zinc-200' : 'text-neutral-600'}`}>Verified</span>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed ${palette.subtle}`}>
              Deploy natively on your infrastructure. Chatty AI provides a fortified isolation layer between your proprietary data and large scale AI processing.
            </p>
            <div className="grid gap-2 sm:gap-3">
              {[
                { id: "air-gapped", title: "Air-Gapped Ready", desc: "No external dependencies required." },
                { id: "e2e-isolation", title: "E2E Isolation", desc: "Native network perimeter security." },
                { id: "pii-sanitization", title: "PII Sanitization", desc: "Real-time automated data masking." }
              ].map((item) => (
                <div key={item.id} className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border px-4 py-3 sm:px-5 sm:py-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${palette.border} ${palette.metric}`}>
                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className={`text-[9px] sm:text-[10px] ${palette.subtle} leading-relaxed`}>{item.desc}</p>
                  <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(180px circle at 50% 20%, ${palette.glow}, transparent 70%)` }} />
                </div>
              ))}
            </div>
          </div>

          {/* Center Visualization - Enterprise Architecture */}
          <figure className="order-1 overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[40px] border transition-all duration-1000 xl:order-2 border-primary/20 relative group">
            <ArchitectureDiagram />
            <figcaption className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 px-4 sm:px-6 py-3 sm:py-4 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] border-t border-zinc-800/50 ${palette.subtle}`}>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <Server className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                <span className="hidden sm:inline">On-Premise Deployment</span>
                <span className="sm:hidden">On-Premise</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="hidden sm:inline">All Protocols Active</span>
                <span className="sm:hidden">Active</span>
              </span>
            </figcaption>
          </figure>

          {/* Launch Protocols - List */}
          <aside className={`order-3 flex flex-col gap-3 sm:gap-4 md:gap-5 rounded-2xl sm:rounded-3xl border p-4 sm:p-5 md:p-6 transition ${palette.border} ${palette.card} xl:order-3`}>
            <div className="flex items-center justify-between">
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] text-primary">Compliance Pulse</h3>
              <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] ${currentTheme === 'dark' ? 'text-zinc-200' : 'text-neutral-600'}`}>Operational</span>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {protocols.map((protocol, index) => (
                <li
                  key={protocol.name}
                  onMouseMove={setSpotlight}
                  onMouseLeave={clearSpotlight}
                  className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border px-4 py-4 sm:px-6 sm:py-5 transition-all duration-500 hover:-translate-y-1 ${palette.border} ${palette.metric}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(190px circle at var(--hero3-x, 50%) var(--hero3-y, 50%), ${palette.glow}, transparent 72%)`
                    }}
                  />
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <h4 className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] group-hover:text-primary transition-colors ${currentTheme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{protocol.name}</h4>
                    <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] text-primary">{protocol.status}</span>
                  </div>
                  <p className={`text-[10px] sm:text-[11px] leading-relaxed group-hover:text-primary transition-colors ${currentTheme === 'dark' ? 'text-zinc-200' : 'text-neutral-600'}`}>{protocol.detail}</p>
                </li>
              ))}
            </ul>

            <div className={`mt-3 sm:mt-4 pt-4 sm:pt-6 border-t ${currentTheme === 'dark' ? 'border-white/5' : 'border-neutral-100'}`}>
              <Link
                href="/security"
                className={`w-full flex items-center justify-center gap-2 py-3 sm:py-4 rounded-full ${currentTheme === 'dark' ? 'bg-primary text-white' : 'bg-primary text-white shadow-purple-500/20'} text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest ${currentTheme === 'dark' ? 'hover:bg-primary/90' : 'hover:bg-primary/90'} transition-all hover:scale-[1.02] shadow-xl ${currentTheme === 'dark' ? 'shadow-primary/20' : 'shadow-purple-500/20'}`}
              >
                <span className="hidden sm:inline">Review Deployment Framework</span>
                <span className="sm:hidden">Deployment Framework</span>
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default SecuritySection;
