import preloader from '../../../files/images/preloader.gif';
import style from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={style.preloader}>
            {props.isFetching ? <img src={preloader} className={style.img}/> : null}
        </div>
        )
}

export default Preloader