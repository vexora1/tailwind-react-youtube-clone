import VideoData from "./VideoData";

const ContentCards = () => {
  return (
    <div className="
      cards
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-3
      px-4
      py-4
    ">
      {VideoData.map(data => {
        return (
          <div className="
            card
            flex
            flex-col
            gap-2
            rounded-md
            shadow-md
            overflow-hidden
            cursor-pointer
            hover:bg-gray-700
            transition
            duration-300
            ease-in-out
          ">
            <img className="card__img" src={data.img} alt="img" />
            <div className="
              card__content
              flex
              flex-col
              gap-1
              px-2
              py-2
            ">
              <div className="
                card__content
                flex
                flex-row
                gap-2
              ">
                <img className="card__content__channel__img w-8 h-8 rounded-full" src={data.channel_img} alt="img" />
                <div>
                  <div className="card__content__title text-lg font-bold">{data.title}</div>
                  <div className="card__content__channel text-gray-400">{data.channel}</div>
                  <div className="views__and__time flex flex-row gap-1 text-gray-400 text-sm">
                    <div className="card__content__views">{data.views}</div>
                    <i className="fas fa-circle text-xs align-middle self-center"></i>
                    <div className="card__content__time">{data.time}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
};

export default ContentCards;