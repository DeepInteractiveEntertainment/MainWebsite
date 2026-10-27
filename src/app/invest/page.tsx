import { permanentRedirect } from "next/navigation";

// Yatırım sayfası kaldırıldı; eski bağlantılar Yayıncılık sayfasına gider.
export default function InvestPage() {
  permanentRedirect("/publishing");
}
