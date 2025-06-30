import styles from './Avatar.module.css'

const Avatar = (props : any) => {
  return (
    <img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} 
    src={props.src}
    />
  )
}

export default Avatar