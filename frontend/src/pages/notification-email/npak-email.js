'use client';

import EmailTemplate from '@/components/email';

export default function NotifikasiNpakPage() {
  return (
    <EmailTemplate
      role="NPAK"
      data={{
        namaNpak: "Ibu Ibu",
      }}
    />
  );
}
