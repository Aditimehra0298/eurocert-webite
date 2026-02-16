export default function TopBar() {
  return (
    <div className="bg-black py-2 px-6 flex flex-wrap justify-between items-center text-[10px] md:text-xs border-b border-white/5 text-white relative z-[1200]">
      <div className="flex space-x-4 md:space-x-6">
        <span className="flex items-center">
          <i className="fas fa-phone mr-2 text-eurogold-400"></i> +91-7009007527
        </span>
        <span className="flex items-center">
          <i className="fas fa-envelope mr-2 text-eurogold-400"></i> info@eurocert.in
        </span>
      </div>
      <div className="hidden sm:block">
        <span className="flex items-center">
          <i className="fas fa-map-marker-alt mr-2 text-eurogold-400"></i> Panchkula, Haryana
        </span>
      </div>
    </div>
  );
}
