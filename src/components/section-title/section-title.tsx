"use client"

import { SectionTitleParamsInterface } from "./section-title-params.interface";
import styles from "./section-title.module.scss";

const SectionTitle = (data: SectionTitleParamsInterface) => {
    const params = data;

    return(
        <section className={styles.container}>
            {params.secondaryTitle ? <h2 className={"text-primary m-0 secondary-text"}>{params.secondaryTitle}</h2> : null}
            {params.primrayTitle ? <h2 className="text-dark m-0 primary-text">{params.primrayTitle}</h2> : null}
        </section>
    )
}

export default SectionTitle;