
const BannerSection = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-105 h-[88.5%] w-[100%] transition-transform"
            src="https://getwallpapers.com/wallpaper/full/4/8/9/1064130-laptop-hd-wallpaper-1920x1080-desktop.jpg"
            alt=""
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-105 transition-transform"
            src="https://cdn.thewirecutter.com/wp-content/media/2023/09/smartphone-2048px-0778-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default BannerSection
