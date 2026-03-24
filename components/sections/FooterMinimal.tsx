interface Props { businessName: string }

export default function FooterMinimal({ businessName }: Props) {
  return (
    <footer className="py-8 px-6 text-center" style={{ backgroundColor: "var(--secondary)" }}>
      <p className="text-sm text-slate-400">
        © {new Date().getFullYear()} {businessName}. All rights reserved.
      </p>
    </footer>
  );
}
