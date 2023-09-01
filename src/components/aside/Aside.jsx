import AsideElements from "./AsideElements";
import Subscriptions from "./Subscriptions";
import "./aside.css";

const Aside = () => {
  return (
    <div className="
      aside
      fixed
      h-[calc(100vh-3.5rem)]
      overflow-y-auto
      overflow-x-hidden
      top-14
      left-0
      w-2/12
      col-span-2
      bg-gray-800
      text-gray-200
      flex flex-col
      justify-between
      z-10
    ">
      <ul className="
        flex
        flex-col
        justify-start
        gap-2
      ">
        {AsideElements.map((e) => {
          if (e.hr) {
            return <hr className="my-2" key={e.id} />;
          } else {
            return (
              <li className="px-2 py-2" key={e.id}>
                <a href={e.link} className="aside__link grid grid-cols-4">
                  <span className="col-span-1 float-left text-center text-xl">
                    <i className={e.icon}></i>
                  </span>
                  <span className="
                  aside__text
                  col-span-3
                  text-left
                  text-lg
                  font-bold
                  font-sans"
                  >
                    {e.text}
                  </span>
                </a>
              </li>
            );
          }
        })}
      </ul>

      <div className="flex flex-col gap-3 py-3">
        {Subscriptions.map((e) => {
          if (!e.more) {
            return (
              <div className="flex flex-row gap-2 px-5 py-1 align-middle">
                <img className="h-8 w-8 rounded-full object-cover" src={e.img} alt={e.title + " adlı kanalın profil fotoğrafı"} />
                <span className="
                  font-bold
                  font-sans
                  align-middle
                  flex
                  items-center
                ">{e.title}</span>
              </div>
            )
          } else {
            return <a className="font-bold text-center" href="#">Daha Fazla Göster <i className="fas fa-chevron-down"></i>
            </a>
          }
        })}
      </div>

    </div>
  );
};

export default Aside;