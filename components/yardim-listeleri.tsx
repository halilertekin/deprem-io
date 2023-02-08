import PrimaryButton from "@/components/primary-button";
import Icon, { Icons } from "@/components/icon";

type YardimAlProps = {};

export default function YardimListeleri({}: YardimAlProps) {
  return (
    <section className="mt-20">
      <h3 className="mb-4">Yardım Listeleri</h3>

      <div className="grid gap-4 sm:grid-cols-3">
        <PrimaryButton href="/yardim-et-konaklama">
          <Icon icon={Icons.Alert} />
          <span>Enkaz Altında Olanlar</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-et-ismak">
          <Icon icon={Icons.Info} />
          <span>Gıda İhtiyacı Olanlar</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-et-yolcu-tasi">
          <Icon icon={Icons.Fire} />
          <span>Isınma İhtiyacı Olanlar</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-et-yolcu-tasi">
          <Icon icon={Icons.Home} />
          <span>Konaklama Sağlayanlar</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-et-yolcu-tasi">
          <Icon icon={Icons.Key} />
          <span>İş Makinesi Kullanabilenler</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-et-yolcu-tasi">
          <Icon icon={Icons.Truck} />
          <span>Yolcu Taşıyabilenler</span>
        </PrimaryButton>
      </div>
    </section>
  );
}
