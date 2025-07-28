import Fotopetinggi from '../assets/Foto_Petinggi-removebg-preview-dHaV_VfB.png';
import sekdes from '../assets/foto_sekdes-removebg-preview-Bmn2FfQJ.png';
import kaurumum from '../assets/foto_kaur_keuangan_-removebg-preview -D1WU4lzD.png';
import kaurUang from '../assets/foto_kaur_keuangan_-removebg-preview -D1WU4lzD.png';
import kasiPelayanan from '../assets/foto_kasi_kesejahteraan-removebg-preview-B5AZD2sG.png';
import kasiPemerintahan from '../assets/foto_kasi_pemerintahan-removebg-preview-BYz9udlT.png';
import staf1 from '../assets/Staf1-removebg-preview-B06X-HbE.png';
import staf from '../assets/staf-removebg-preview-De3Ve7_Z.png';
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  const staffList = [
    {
      name: "Aspiransyah",
      title: "Village Head",
      handle: "Aspiransyah",
      avatarUrl: Fotopetinggi,
      contactHref: '*',
    },
    {
      name: "Cristianus Renaldy",
      title: "Village Secretary",
      handle: "Cristianus Renaldy",
      avatarUrl: sekdes,
      contactHref: 'https://wa.me/6282251060456',
    },
    {
      name: "Jacksen Kamsien",
      title: "Head Of general Affairs and Planning",
      handle: "Jacksen Kamsien",
      avatarUrl: kaurumum,
      contactHref: 'https://wa.me/6281347915299',
    },
    {
      name: "Yohanes Riki M.",
      title: "Head Of financial affairs",
      handle: "Yohanes Riki M.",
      avatarUrl: kaurUang,
      contactHref: '*',
    },
    {
      name: "Elma Yanti Magdalena",
      title: "Head of Welfare and Service Section",
      handle: "Elma Yanti",
      avatarUrl: kasiPelayanan,
      contactHref: '*',
    },
    {
      name: "Matius Ebi",
      title: "Head of Government Section",
      handle: "Matius Ebi",
      avatarUrl: kasiPemerintahan,
      contactHref: '*',
    },
    {
      name: "Hidayah",
      title: "Staf",
      handle: "Hidayah",
      avatarUrl: staf1,
      contactHref: '*',
    },
    {
      name: "Rosalia Resiolla",
      title: "Staf",
      handle: "Rosalia Resiolla",
      avatarUrl: staf,
      contactHref: '*',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {staffList.map((staff, index) => (
          <ProfileCard
            key={index}
            name={staff.name}
            title={staff.title}
            handle={staff.handle}
            status="Online"
            contactText="Contact Me"
            avatarUrl={staff.avatarUrl}
            showUserInfo={true}
            contactHref={staff.contactHref}
            enableTilt={true}
            onContactClick={() => console.log("Contact clicked")}
            className="mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
