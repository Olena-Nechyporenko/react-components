import css from "./FriendList.module.css"
import clsx from "clsx"

export const FriendList = ({children}) => {
    return (
        <ul className={css.friendlist}>
        {children}
        </ul>
    )
}

export const FriendListItem = ({friends}) => {
    return (
       friends.map(({avatar, name, isOnline, id}) => 
        <li key={id} className={css.item}>
        <span className={clsx(
            css.status, 
            isOnline ? css.online : css.offline)}
        >
        </span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
        )    
    )
}