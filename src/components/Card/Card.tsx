import s from "./Card.module.css";

const Card = () => {
    return (
        <div className={s.card}>
            <a href='/' className={s.card__title}>
                Как уменьшить изображение и контейнер, в который это изображение
                вложено?
            </a>
            <div className={s.card__content}>
                Если вложить изображение в div, то размер div-контейнера
                по умолчанию будет равен размеру изображения. Если указать
                размер изображения 20% от оригинала, то div-контейнер
                не уменьшается. Его размер остаётся равным 100% от размера
                изображения. Как уменьшить и изображение, и div-контейнер,
                в который это изображение вложено?
            </div>
            <div className={s.card__panel}>
                <div>
                    <span>18 марта 18:30</span>
                    <span>Иван Петров</span>
                </div>
                <div>
                    <a href='/'>Читать потом</a>
                    <a href='/'>В избранное</a>
                </div>
            </div>
            <div className={s.card__tags}>
                <span>тег1</span>
                <span>тег2</span>
                <span>тег3</span>
            </div>
        </div>
    );
};

export { Card };
