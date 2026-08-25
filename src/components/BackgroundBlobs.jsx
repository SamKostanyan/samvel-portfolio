export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-light bg-grid opacity-40 dark:bg-grid-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="absolute -top-24 left-1/4 h-72 w-72 animate-blob rounded-full bg-accent-400/30 blur-3xl dark:bg-accent-500/20" />
      <div
        className="absolute top-10 right-1/4 h-72 w-72 animate-blob rounded-full bg-purple-400/25 blur-3xl dark:bg-purple-500/20"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="absolute -bottom-10 left-1/3 h-64 w-64 animate-blob rounded-full bg-teal-300/25 blur-3xl dark:bg-teal-500/10"
        style={{ animationDelay: '6s' }}
      />
    </div>
  )
}
