const services = [
  { icon: 'fa-seedling', label: 'Food & Agri' },
  { icon: 'fa-users', label: 'Social' },
  { icon: 'fa-cogs', label: 'Management' },
  { icon: 'fa-certificate', label: 'CE Marking' },
  { icon: 'fa-leaf', label: 'Sustainability' },
  { icon: 'fa-graduation-cap', label: 'Training' },
  { icon: 'fa-award', label: 'Accreditation' },
  { icon: 'fa-envelope', label: 'Contact' },
];

export default function ServiceBar() {
  return (
    <div className="bottom-service-bar">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-10 gap-x-2">
          {services.map((service) => (
            <div key={service.label} className="service-item text-center cursor-pointer group">
              <div className="service-icon-circle">
                <i className={`fas ${service.icon} text-sm`}></i>
              </div>
              <div className="text-[10px] tracking-widest font-bold text-white/40 group-hover:text-white uppercase transition">
                {service.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
