import PrimaryButton from "@/components/primary-button";
import Icon, { Icons } from "@/components/icon";

type YardimAlProps = {};

export default function YardimSagla({}: YardimAlProps) {
  return (
    <section className="mt-20">
      <h3 className="mb-4">Yardım Sağla</h3>

      <div className="grid gap-4 sm:grid-cols-3">
        <PrimaryButton href="/yardim-et-konaklama">
          <Icon icon={Icons.Home} />
          <span>Konaklama Sağlayabilirim</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-et-ismak">
          <Icon icon={Icons.Key} />
          <span>İş Makinesi Kullanabilirim</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-et-yolcu-tasi">
          <Icon icon={Icons.Truck} />
          <span>Yolcu Taşıyabilirim</span>
        </PrimaryButton>
      </div>
    </section>
  );
}
