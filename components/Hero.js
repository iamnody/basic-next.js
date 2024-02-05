import headerStyles from '../styles/Header.module.css'

export default function Hero() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Tech</span> Insights
      </h1>
      <p className={headerStyles.description}>
        Stay Informed with the Latest in Technology News
      </p>
    </div>
  )
}
