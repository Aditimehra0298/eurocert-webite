export default function UniverseBackground() {
  return (
    <div className="fixed inset-0 -z-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f5fa] via-white to-[#f0f5fa]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(91,141,239,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
    </div>
  )
}
